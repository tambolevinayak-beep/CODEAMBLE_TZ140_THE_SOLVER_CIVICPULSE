'use client';

import { useEffect, useRef, useState } from 'react';
import { Camera, Check, LoaderCircle, MapPin, Mic, RotateCcw, ShieldCheck, Video, X } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { createVerificationSubmission, uploadIssueMedia } from '@/lib/api';

const MAX_FILE_SIZE = 50 * 1024 * 1024;

function formatDuration(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

export default function VerificationPage() {
  const { user } = useAuth();
  const cameraVideoRef = useRef(null);
  const cameraStreamRef = useRef(null);
  const videoRecorderRef = useRef(null);
  const videoChunksRef = useRef([]);
  const audioStreamRef = useRef(null);
  const audioRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [media, setMedia] = useState(null);
  const [cameraMode, setCameraMode] = useState(null);
  const [cameraRecording, setCameraRecording] = useState(false);
  const [audioRecording, setAudioRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [location, setLocation] = useState(null);
  const [locationAddress, setLocationAddress] = useState('');
  const [locationState, setLocationState] = useState('requesting');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationState('unsupported');
      setError('Location services are not supported by this browser.');
      return undefined;
    }

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLocation({ latitude: coords.latitude, longitude: coords.longitude, accuracy: coords.accuracy });
      setLocationState('ready');
      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}&zoom=18&addressdetails=1`, {
        headers: { Accept: 'application/json' },
      })
        .then((response) => response.ok ? response.json() : null)
        .then((data) => setLocationAddress(data?.display_name || 'Address unavailable'))
        .catch(() => setLocationAddress('Address unavailable'));
    }, () => {
      setLocationState('denied');
      setError('Location permission is required to submit verification.');
    }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 });

    return () => {
      cameraStreamRef.current?.getTracks().forEach((track) => track.stop());
      audioStreamRef.current?.getTracks().forEach((track) => track.stop());
      if (media?.preview?.startsWith('blob:')) URL.revokeObjectURL(media.preview);
    };
  }, []);

  useEffect(() => {
    if (!audioRecording && !cameraRecording) return undefined;
    const timer = window.setInterval(() => setRecordingSeconds((seconds) => seconds + 1), 1000);
    return () => window.clearInterval(timer);
  }, [audioRecording, cameraRecording]);

  function setCapturedMedia(file, type) {
    if (!file) return;
    if (file.size > MAX_FILE_SIZE) {
      setError('That recording is larger than 50 MB. Please record a shorter one.');
      return;
    }
    if (media?.preview?.startsWith('blob:')) URL.revokeObjectURL(media.preview);
    setMedia({ file, type, preview: URL.createObjectURL(file) });
    setError('');
  }

  async function openCamera(mode) {
    setError('');
    if (!navigator.mediaDevices?.getUserMedia) {
      setError('Camera access is not supported by this browser.');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: mode === 'video',
      });
      cameraStreamRef.current = stream;
      setCameraMode(mode);
      window.requestAnimationFrame(() => {
        if (cameraVideoRef.current) {
          cameraVideoRef.current.srcObject = stream;
          cameraVideoRef.current.play().catch(() => {});
        }
      });
    } catch {
      setError('Camera permission is required to capture evidence.');
    }
  }

  function closeCamera() {
    cameraStreamRef.current?.getTracks().forEach((track) => track.stop());
    cameraStreamRef.current = null;
    setCameraRecording(false);
    setRecordingSeconds(0);
    setCameraMode(null);
  }

  function capturePhoto() {
    const video = cameraVideoRef.current;
    if (!video?.videoWidth) {
      setError('The camera is still starting. Please try again in a moment.');
      return;
    }
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (!blob) return;
      setCapturedMedia(new File([blob], `verification-photo-${Date.now()}.jpg`, { type: 'image/jpeg' }), 'photo');
      closeCamera();
    }, 'image/jpeg', 0.92);
  }

  function toggleVideoRecording() {
    if (cameraRecording) {
      videoRecorderRef.current?.stop();
      return;
    }
    const stream = cameraStreamRef.current;
    if (!stream || !window.MediaRecorder) {
      setError('Video recording is not supported by this browser.');
      return;
    }
    const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus') ? 'video/webm;codecs=vp9,opus' : 'video/webm';
    const recorder = new MediaRecorder(stream, { mimeType });
    videoRecorderRef.current = recorder;
    videoChunksRef.current = [];
    recorder.ondataavailable = (event) => videoChunksRef.current.push(event.data);
    recorder.onstop = () => {
      const blob = new Blob(videoChunksRef.current, { type: mimeType });
      setCapturedMedia(new File([blob], `verification-video-${Date.now()}.webm`, { type: mimeType }), 'video');
      closeCamera();
    };
    recorder.start();
    setRecordingSeconds(0);
    setCameraRecording(true);
  }

  async function toggleAudioRecording() {
    setError('');
    if (audioRecording) {
      audioRecorderRef.current?.stop();
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      setError('Audio recording is not supported by this browser.');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      audioStreamRef.current = stream;
      audioRecorderRef.current = recorder;
      audioChunksRef.current = [];
      recorder.ondataavailable = (event) => audioChunksRef.current.push(event.data);
      recorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        setCapturedMedia(new File([blob], `verification-audio-${Date.now()}.webm`, { type: blob.type }), 'audio');
        stream.getTracks().forEach((track) => track.stop());
        audioStreamRef.current = null;
        setAudioRecording(false);
        setRecordingSeconds(0);
      };
      recorder.start();
      setRecordingSeconds(0);
      setAudioRecording(true);
    } catch {
      setError('Microphone permission is required to record audio.');
    }
  }

  function clearMedia() {
    if (media?.preview?.startsWith('blob:')) URL.revokeObjectURL(media.preview);
    setMedia(null);
    setError('');
  }

  async function submitVerification() {
    if (!media || !location || locationState !== 'ready') {
      setError('Add media and allow location access before submitting.');
      return;
    }
    setSubmitting(true);
    setError('');
    const upload = await uploadIssueMedia(media.file, user?.id);
    if (upload.error) {
      setError(upload.error.message || upload.error);
      setSubmitting(false);
      return;
    }
    const result = await createVerificationSubmission({
      user_id: user?.id || null,
      media_url: upload.data.publicUrl,
      media_path: upload.data.path,
      media_type: media.type,
      mime_type: media.file.type,
      location_lat: location.latitude,
      location_lng: location.longitude,
      location_accuracy: location.accuracy,
      location_address: locationAddress,
    });
    if (result.error) {
      setError(result.error.message || result.error);
      setSubmitting(false);
      return;
    }
    setSubmitted(true);
    setSubmitting(false);
  }

  if (submitted) {
    return <main className="verification-page"><section className="verification-card verification-success" aria-live="polite"><div className="verification-icon success"><Check size={28} /></div><p className="verification-kicker">Verification received</p><h1>Thank you for helping make the case clear.</h1><p>Your supporting media has been securely submitted.</p></section></main>;
  }

  return (
    <main className="verification-page">
      <section className="verification-card">
        <div className="verification-header"><div><p className="verification-kicker">Evidence capture</p><h1>Add media supporting your case:</h1><p className="verification-subtitle">A photo, video, or voice note gives your report useful context.</p></div><div className={`location-status ${locationState === 'ready' ? 'ready' : ''}`}><MapPin size={17} /><span>{locationState === 'ready' ? 'Location on' : 'Location required'}</span></div></div>
        <div className="verification-location-note"><ShieldCheck size={18} /><span>Your location is captured with the media so the evidence can be placed accurately.</span></div>

        {!media && !cameraMode && !audioRecording ? <div className="verification-options">
          <button type="button" className="verification-option photo" onClick={() => openCamera('photo')}><span className="option-icon"><Camera size={23} /></span><span><strong>Take a photo</strong><small>Use live camera</small></span></button>
          <button type="button" className="verification-option video" onClick={() => openCamera('video')}><span className="option-icon"><Video size={23} /></span><span><strong>Record a video</strong><small>Use live camera</small></span></button>
          <button type="button" className="verification-option audio" onClick={toggleAudioRecording}><span className="option-icon"><Mic size={23} /></span><span><strong>Use microphone</strong><small>Record a voice note</small></span></button>
        </div> : null}

        {!media && cameraMode ? <div className="camera-capture-panel"><video ref={cameraVideoRef} className="camera-live-preview" muted playsInline /><div className="camera-capture-actions"><button type="button" className="secondary-action" onClick={closeCamera}><X size={17} /> Cancel</button>{cameraMode === 'photo' ? <button type="button" className="primary-action" onClick={capturePhoto}><Camera size={17} /> Capture photo</button> : <button type="button" className={`primary-action ${cameraRecording ? 'recording-action' : ''}`} onClick={toggleVideoRecording}>{cameraRecording ? 'Stop video' : 'Start video'}</button>}</div></div> : null}

        {!media && audioRecording ? <div className="audio-recording-panel"><div className="recording-dot" /><strong>Recording voice note</strong><span>{formatDuration(recordingSeconds)}</span><button type="button" className="primary-action recording-action" onClick={toggleAudioRecording}>Stop recording</button></div> : null}

        {media ? <div className="verification-review"><div className="media-preview">{media.type === 'photo' && <img src={media.preview} alt="Captured verification evidence" />}{media.type === 'video' && <video src={media.preview} controls playsInline />}{media.type === 'audio' && <><Mic size={32} /><audio src={media.preview} controls /></>}</div><p className="review-label">Review your {media.type} before sending.</p><div className="review-actions"><button type="button" className="secondary-action" onClick={clearMedia}><X size={17} /> Remove</button><button type="button" className="primary-action" disabled={submitting || locationState !== 'ready'} onClick={submitVerification}>{submitting ? <LoaderCircle size={17} className="spin" /> : <Check size={17} />}{submitting ? 'Sending...' : 'Confirm and send'}</button></div></div> : null}

        {error && <p className="verification-error" role="alert">{error}</p>}
        {locationState === 'ready' && location && <div className="verification-location-details"><p className="verification-coordinates"><MapPin size={14} /> GPS accuracy {Math.round(location.accuracy)}m</p><p className="verification-address"><MapPin size={14} /> {locationAddress || 'Detecting address...'}</p></div>}
        {media && !submitting && <button type="button" className="reset-link" onClick={clearMedia}><RotateCcw size={14} /> Choose different media</button>}
      </section>
    </main>
  );
}