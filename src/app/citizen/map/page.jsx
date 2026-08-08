'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function MapView() {
  const [problems, setProblems] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchProblems() {
      if (!supabase) return;
      try {
        let query = supabase.from('problems').select('*, users (name)');
        if (searchQuery) {
          query = query.ilike('title', `%${searchQuery}%`);
        }
        const { data, error } = await query;
        if (!error && data) {
          setProblems(data);
        }
      } catch (err) {
        console.error('Error fetching problems:', err);
      }
    }
    fetchProblems();
  }, [searchQuery]);

  // Deterministic random position generator based on string
  const getPos = (str, offset) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const val = Math.abs(Math.sin(hash + offset)) * 60 + 20; // 20% to 80%
    return `${val}%`;
  };

  const closeSheet = () => setSelectedProblem(null);

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full relative h-[calc(100vh-4rem-100px)]">
      
      <div className="absolute inset-0 map-bg rounded-xl z-0 overflow-hidden bg-surface-container-high" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqm2afID0K7oOJcD7u943IOKIZooekCsD7vEWS9nCerzkMWOVbMXwnPdTDe-jZ3vuskyefsqOls1o7ZAAqCykAPdCQiBIDAwjEkb7Xn1Xq8mjhJHX-z8AC9nkLG1FgnCNXfRfqyYRrtya6yMu-a2Dph-MTVeDzdRwayzjdMSWzT9UIaSnCE403gQRFkkKubHZvfsVNqc_7ApyzC221rCaMIkBRuEvKGJgZ29mWUDkP_rgJunPdaf96')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      <div className="absolute top-md left-md right-md md:left-lg md:right-auto md:w-[400px] z-20">
        <div className="glass-panel rounded-xl shadow-lg border border-outline-variant/30 p-2 flex items-center focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all bg-surface/80 backdrop-blur-md">
          <span className="material-symbols-outlined text-outline ml-2 mr-2">search</span>
          <input 
            className="w-full bg-transparent border-none focus:ring-0 text-body-md font-body-md text-on-surface placeholder:text-outline p-2 outline-none" 
            placeholder="Search locations or issue IDs..." 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        {problems.map(problem => {
          const top = getPos(problem.id, 0);
          const left = getPos(problem.id, 1);
          
          let colorClass = 'bg-tertiary-container';
          let textColorClass = 'text-tertiary-container';
          let icon = 'info';
          let glowClass = 'pin-glow-amber';

          if (problem.status === 'resolved') {
             colorClass = 'bg-[#0F9D8C]';
             textColorClass = 'text-[#0F9D8C]';
             icon = 'check_circle';
             glowClass = 'pin-glow-green';
          } else if (problem.category === 'pothole') {
             icon = 'warning';
          } else if (problem.category === 'streetlight') {
             icon = 'lightbulb';
          }

          const isSelected = selectedProblem?.id === problem.id;

          return (
            <div 
              key={problem.id}
              className={`absolute pointer-events-auto transform transition-transform cursor-pointer group z-30 ${isSelected ? 'scale-125' : 'hover:scale-110'}`}
              style={{ top, left }}
              onClick={() => setSelectedProblem(problem)}
            >
              <div className={`w-10 h-10 ${isSelected ? 'w-12 h-12 border-2' : 'border'} ${colorClass} rounded-full rounded-br-none rotate-45 flex items-center justify-center ${glowClass} border-surface ${isSelected ? 'shadow-[0_4px_20px_rgba(30,58,95,0.2)]' : ''}`}>
                <div className={`bg-surface rounded-full flex items-center justify-center -rotate-45 shadow-sm ${isSelected ? 'w-9 h-9' : 'w-8 h-8'}`}>
                  <span className={`material-symbols-outlined ${isSelected ? 'text-[18px]' : 'text-[16px]'} ${textColorClass}`}>{icon}</span>
                </div>
              </div>
              {isSelected && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-surface-on shadow-lg rounded-full opacity-50 blur-[2px]"></div>
              )}
            </div>
          );
        })}
      </div>

      {selectedProblem && (
        <div className="absolute bottom-0 left-0 right-0 md:left-auto md:right-lg md:bottom-lg md:w-[420px] md:top-auto md:h-auto z-40 bottom-sheet md:transform-none">
          <div className="w-full flex justify-center py-2 md:hidden glass-panel rounded-t-2xl border-t border-outline-variant cursor-grab active:cursor-grabbing" onClick={closeSheet}>
            <div className="w-12 h-1.5 bg-outline-variant rounded-full"></div>
          </div>
          <div className="glass-panel p-lg md:rounded-xl shadow-[0px_-4px_20px_rgba(30,58,95,0.08)] border border-outline-variant md:border-b bg-surface/95 backdrop-blur-md">
            
            <div className="flex justify-between items-start mb-4">
              <div className={`inline-flex items-center gap-2 rounded-xl px-3 py-1 ${selectedProblem.status === 'resolved' ? 'bg-primary-container/15' : 'bg-tertiary-container/15'}`}>
                <span className={`material-symbols-outlined text-[12px] ${selectedProblem.status === 'resolved' ? 'text-primary' : 'text-tertiary-container'}`}>
                  {selectedProblem.status === 'resolved' ? 'check_circle' : 'warning'}
                </span>
                <span className={`font-label-md text-label-md uppercase ${selectedProblem.status === 'resolved' ? 'text-primary' : 'text-tertiary-container'}`}>
                  {selectedProblem.status.replace('_', ' ')}
                </span>
              </div>
              <button className="text-on-surface-variant hover:bg-surface-container p-2 rounded-full transition-colors" onClick={closeSheet}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/30 bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-outline opacity-50 text-3xl">image</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{selectedProblem.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">{selectedProblem.location_address || 'Location details not provided'}</p>
                <div className="flex items-center gap-4 text-outline font-body-sm text-body-sm">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    {new Date(selectedProblem.created_at).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                    <span className="font-label-md">{selectedProblem.support_count || 0} supports</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-2.5 rounded-lg hover:bg-primary/90 transition-all shadow-sm active:translate-y-px">
                  Support Issue
              </button>
              <button 
                onClick={() => router.push(`/citizen/issue/${selectedProblem.id}`)}
                className="px-4 py-2.5 border border-secondary text-secondary font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-all"
              >
                  Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
