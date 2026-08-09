'use client';
import React, { useState } from 'react';

export default function OfficersPage() {
  const [officers, setOfficers] = useState([
    { id: 'off-1', name: 'Rajesh Kumar', department: 'Roads & Infrastructure', locality: 'Kothrud', status: 'Active' },
    { id: 'off-2', name: 'Sneha Patel', department: 'Water & Sanitation', locality: 'Baner', status: 'Active' },
    { id: 'off-3', name: 'Amit Singh', department: 'Electricity & Power', locality: 'Viman Nagar', status: 'On Leave' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOfficerName, setNewOfficerName] = useState('');
  const [newOfficerDept, setNewOfficerDept] = useState('');

  const handleAddOfficer = (e) => {
    e.preventDefault();
    if (!newOfficerName || !newOfficerDept) return;
    setOfficers([...officers, { id: `off-${Date.now()}`, name: newOfficerName, department: newOfficerDept, locality: 'Unassigned', status: 'Active' }]);
    setNewOfficerName('');
    setNewOfficerDept('');
    setIsModalOpen(false);
  };

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full">
      <header className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Officers Management</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Assign officers to specific domains of work and localities.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg shadow-sm hover:bg-surface-tint transition-all border-none cursor-pointer">
          <span className="material-symbols-outlined text-[20px]">person_add</span>
          Assign Officer
        </button>
      </header>

      <div className="bg-surface border border-surface-variant rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-surface-container-lowest border-b border-surface-variant">
            <tr>
              <th className="p-4 font-label-md text-on-surface-variant">Officer Name</th>
              <th className="p-4 font-label-md text-on-surface-variant">Domain (Department)</th>
              <th className="p-4 font-label-md text-on-surface-variant">Locality</th>
              <th className="p-4 font-label-md text-on-surface-variant">Status</th>
              <th className="p-4 font-label-md text-on-surface-variant text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-variant">
            {officers.map((officer) => (
              <tr key={officer.id} className="hover:bg-surface-container-lowest/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-sm">
                      {officer.name.charAt(0)}
                    </div>
                    <span className="font-headline-sm text-on-surface">{officer.name}</span>
                  </div>
                </td>
                <td className="p-4 font-body-md text-on-surface-variant">{officer.department}</td>
                <td className="p-4 font-body-md text-on-surface-variant">{officer.locality}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-label-md ${officer.status === 'Active' ? 'bg-[#0F9D8C]/10 text-[#0F9D8C]' : 'bg-surface-variant text-on-surface-variant'}`}>
                    {officer.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="bg-surface p-6 rounded-xl w-full max-w-md shadow-lg border border-surface-variant">
            <h3 className="font-headline-sm text-headline-sm mb-4">Assign New Officer</h3>
            <form onSubmit={handleAddOfficer} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface">Officer Full Name</label>
                <input 
                  type="text" 
                  value={newOfficerName}
                  onChange={(e) => setNewOfficerName(e.target.value)}
                  className="px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="e.g., John Doe"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface">Department Domain</label>
                <select 
                  value={newOfficerDept}
                  onChange={(e) => setNewOfficerDept(e.target.value)}
                  className="px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  required
                >
                  <option value="">Select Domain...</option>
                  <option value="Roads & Infrastructure">Roads & Infrastructure</option>
                  <option value="Water & Sanitation">Water & Sanitation</option>
                  <option value="Electricity & Power">Electricity & Power</option>
                  <option value="Parks & Recreation">Parks & Recreation</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-on-surface-variant hover:text-on-surface bg-transparent border-none cursor-pointer">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary text-on-primary rounded-md shadow-sm border-none cursor-pointer">Assign</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
