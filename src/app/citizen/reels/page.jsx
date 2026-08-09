'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { createIssue, fetchReelIssues, uploadIssueMedia } from '@/lib/api';

const ACCEPTED_TYPES = ['video/mp4', 'video/webm', 'video/quicktime'];
const MAX_FILE_SIZE = 50 * 1024 * 1024;

export default function ReelsPage() {
  const { user } = useAuth();
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    title: '',
    description: '',
    category: 'other',
    location_address: '',
    location_lat: '20.5937',
    location_lng: '78.9629',
  });
  const [videoFile, setVideoFile] = useState(null);
  const [fetchingLocation, setFetchingLocation] = useState(false);

  const fetchLocation = (e) => {
    e.preventDefault();
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }
    setFetchingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setForm(prev => ({
          ...prev,
          location_lat: position.coords.latitude.toFixed(6),
          location_lng: position.coords.longitude.toFixed(6)
        }));
        setFetchingLocation(false);
      },
      (err) => {
        setError("Unable to retrieve your location");
        setFetchingLocation(false);
      }
    );
  };

  async function loadReels() {
    setLoading(true);
    const { data, error: fetchError } = await fetchReelIssues(80);
    if (!fetchError) {
      setReels(data || []);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadReels();
  }, []);

  const parsedLat = useMemo(() => Number(form.location_lat), [form.location_lat]);
  const parsedLng = useMemo(() => Number(form.location_lng), [form.location_lng]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!videoFile) {
      setError('Please upload a video file.');
      return;
    }

    if (!ACCEPTED_TYPES.includes(videoFile.type)) {
      setError('Only MP4, WEBM, and MOV videos are allowed.');
      return;
    }

    if (videoFile.size > MAX_FILE_SIZE) {
      setError('Video is too large. Maximum allowed size is 50 MB.');
      return;
    }

    if (!Number.isFinite(parsedLat) || !Number.isFinite(parsedLng)) {
      setError('Please provide valid latitude and longitude values.');
      return;
    }

    setSubmitting(true);

    try {
      const upload = await uploadIssueMedia(videoFile, user?.id);
      if (upload.error) {
        setError(upload.error);
        setSubmitting(false);
        return;
      }

      const payload = {
        title: form.title.trim(),
        description: form.description.trim() || 'Citizen uploaded a civic issue reel.',
        category: form.category,
        user_id: user?.id,
        locality_id: user?.locality_id || null,
        status: 'reported',
        media_urls: [upload.data.publicUrl],
        location_address: form.location_address.trim() || 'User submitted reel location',
        location_lat: parsedLat,
        location_lng: parsedLng,
      };

      const created = await createIssue(payload);
      if (created.error) {
        setError(created.error.message || created.error || 'Unable to save reel issue.');
        setSubmitting(false);
        return;
      }

      setForm({
        title: '',
        description: '',
        category: 'other',
        location_address: '',
        location_lat: '20.5937',
        location_lng: '78.9629',
      });
      setVideoFile(null);
      await loadReels();
    } catch (submitError) {
      setError(submitError.message || 'Failed to publish reel.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl max-w-full mx-auto w-full">
      <section className="mb-6 rounded-2xl border border-white/60 bg-white/65 backdrop-blur-xl p-5 shadow-[0_20px_55px_rgba(20,30,55,0.08)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-700">Explore</p>
            <h1 className="text-2xl font-bold text-slate-900">Civic Reels</h1>
            <p className="text-sm text-slate-600">Upload short videos of civic problems and view community reels in one stream.</p>
          </div>
          <Link href="/citizen/feed" className="inline-flex items-center justify-center rounded-xl bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-700">
            View Issues
          </Link>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-5">
        <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur-lg shadow-[0_18px_45px_rgba(20,30,55,0.1)] space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Upload a Reel</h2>

          <input
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            placeholder="Issue title"
            value={form.title}
            onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
            required
          />

          <textarea
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            placeholder="Describe the issue"
            rows={3}
            value={form.description}
            onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
          />

          <select
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            value={form.category}
            onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
          >
            <option value="pothole">Pothole</option>
            <option value="garbage">Garbage</option>
            <option value="water_leakage">Water Leakage</option>
            <option value="electricity">Electricity</option>
            <option value="streetlight">Streetlight</option>
            <option value="safety">Safety</option>
            <option value="other">Other</option>
          </select>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">Location</span>
              <button
                type="button"
                onClick={fetchLocation}
                disabled={fetchingLocation}
                className="flex items-center gap-1 text-xs font-semibold text-primary bg-primary-container/20 px-2 py-1 rounded-md hover:bg-primary-container/40 transition disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-[14px]">my_location</span>
                {fetchingLocation ? 'Fetching...' : 'Use My Location'}
              </button>
            </div>
            <input
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              placeholder="Location address"
              value={form.location_address}
              onChange={(e) => setForm((prev) => ({ ...prev, location_address: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <input
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              placeholder="Latitude"
              value={form.location_lat}
              onChange={(e) => setForm((prev) => ({ ...prev, location_lat: e.target.value }))}
              required
            />
            <input
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              placeholder="Longitude"
              value={form.location_lng}
              onChange={(e) => setForm((prev) => ({ ...prev, location_lng: e.target.value }))}
              required
            />
          </div>

          <input
            type="file"
            accept="video/mp4,video/webm,video/quicktime"
            onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
            required
          />

          {error && <p className="text-sm text-rose-700">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-700 disabled:opacity-60"
          >
            {submitting ? 'Publishing...' : 'Publish Reel'}
          </button>
          <p className="text-xs text-slate-500">Formats: MP4, WEBM, MOV. Max size: 50 MB.</p>
        </form>

        <section className="lg:col-span-3 rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur-lg shadow-[0_18px_45px_rgba(20,30,55,0.1)]">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Community Reels</h2>

          {loading ? (
            <p className="text-slate-600">Loading reels...</p>
          ) : reels.length === 0 ? (
            <p className="text-slate-600">No video reels available yet.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {reels.map((reel) => {
                const mediaUrls = Array.isArray(reel.media_urls) ? reel.media_urls : [];
                const videoUrl = mediaUrls.find((url) => /\.(mp4|webm|mov|m4v)(\?|$)/i.test(url));
                return (
                  <article key={reel.id} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    {videoUrl && (
                      <video controls className="mb-3 h-48 w-full rounded-lg bg-black object-cover">
                        <source src={videoUrl} />
                      </video>
                    )}
                    <h3 className="text-sm font-semibold text-slate-900">{reel.title}</h3>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2">{reel.description}</p>
                    <p className="mt-2 text-xs text-slate-500">{reel.location_address || 'Location unavailable'}</p>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
