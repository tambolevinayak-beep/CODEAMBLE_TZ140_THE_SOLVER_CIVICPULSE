'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { fetchUserProfile, updateUserProfile } from '@/lib/api';

export default function ProfilePage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    locality_id: '',
    avatar_url: '',
  });

  useEffect(() => {
    async function loadProfile() {
      setLoading(true);

      const fallback = {
        name: user?.name || '',
        email: user?.email || '',
        phone: '',
        locality_id: user?.locality_id || 'kothrud',
        avatar_url: user?.avatar_url || '',
      };

      if (!user?.id) {
        setForm(fallback);
        setLoading(false);
        return;
      }

      const { data } = await fetchUserProfile(user.id);
      if (data) {
        setForm({
          name: data.name || fallback.name,
          email: data.email || fallback.email,
          phone: data.phone || '',
          locality_id: data.locality_id || fallback.locality_id,
          avatar_url: data.avatar_url || '',
        });
      } else {
        setForm(fallback);
      }

      setLoading(false);
    }

    loadProfile();
  }, [user?.id, user?.name, user?.email, user?.locality_id, user?.avatar_url]);

  async function onSubmit(event) {
    event.preventDefault();
    setMessage('');

    if (!user?.id) {
      setMessage('No authenticated user found.');
      return;
    }

    setSaving(true);

    const { error } = await updateUserProfile(user.id, {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      locality_id: form.locality_id.trim() || null,
      avatar_url: form.avatar_url.trim() || null,
    });

    if (error) {
      setMessage(error.message || 'Unable to update profile.');
      setSaving(false);
      return;
    }

    setMessage('Profile updated successfully.');
    setSaving(false);
  }

  if (loading) {
    return <div className="p-6 text-slate-600">Loading profile...</div>;
  }

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl max-w-full mx-auto w-full">
      <section className="mb-6 rounded-2xl border border-white/60 bg-white/65 backdrop-blur-xl p-5 shadow-[0_20px_55px_rgba(20,30,55,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Profile</p>
        <h1 className="text-2xl font-bold text-slate-900">Account Details</h1>
        <p className="text-sm text-slate-600">View and edit your account profile used for citizen reporting.</p>
      </section>

      <form onSubmit={onSubmit} className="rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur-lg shadow-[0_18px_45px_rgba(20,30,55,0.1)] space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-slate-700">
            Full Name
            <input
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
          </label>

          <label className="text-sm text-slate-700">
            Email
            <input
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              required
            />
          </label>

          <label className="text-sm text-slate-700">
            Phone
            <input
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
              placeholder="Optional"
            />
          </label>

          <label className="text-sm text-slate-700">
            Locality ID
            <input
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
              value={form.locality_id}
              onChange={(e) => setForm((prev) => ({ ...prev, locality_id: e.target.value }))}
            />
          </label>
        </div>

        <label className="block text-sm text-slate-700">
          Avatar URL
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
            value={form.avatar_url}
            onChange={(e) => setForm((prev) => ({ ...prev, avatar_url: e.target.value }))}
            placeholder="https://..."
          />
        </label>

        {message && <p className="text-sm text-slate-700">{message}</p>}

        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
        >
          {saving ? 'Saving...' : 'Save Profile'}
        </button>
      </form>
    </div>
  );
}
