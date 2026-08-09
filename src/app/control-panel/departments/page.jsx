'use client';
import React, { useState } from 'react';

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([
    { id: 'dept-1', name: 'Roads & Infrastructure', head: 'Rajesh Kumar', active_issues: 45 },
    { id: 'dept-2', name: 'Water & Sanitation', head: 'Sneha Patel', active_issues: 32 },
    { id: 'dept-3', name: 'Electricity & Power', head: 'Amit Singh', active_issues: 18 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDeptName, setNewDeptName] = useState('');

  const handleAddDept = (e) => {
    e.preventDefault();
    if (!newDeptName) return;
    setDepartments([...departments, { id: `dept-${Date.now()}`, name: newDeptName, head: 'Unassigned', active_issues: 0 }]);
    setNewDeptName('');
    setIsModalOpen(false);
  };

  return (
    <div className="stitch-page-content p-md md:p-lg xl:p-xl flex-1 max-w-[1280px] mx-auto w-full">
      <header className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Departments Management</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Create and manage specific domains of work for the municipality.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg shadow-sm hover:bg-surface-tint transition-all border-none cursor-pointer">
          <span className="material-symbols-outlined text-[20px]">add</span>
          New Department
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div key={dept.id} className="glass-card p-6 rounded-xl border border-surface-variant flex flex-col gap-4 group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-primary-container/20 text-primary rounded-lg shrink-0">
                <span className="material-symbols-outlined">domain</span>
              </div>
              <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity bg-transparent border-none cursor-pointer">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{dept.name}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Head: {dept.head}</p>
            </div>
            <div className="mt-auto pt-4 border-t border-outline-variant flex justify-between items-center">
              <span className="font-label-md text-sm text-on-surface-variant">Active Issues</span>
              <span className="font-metric-sm text-lg font-bold text-primary">{dept.active_issues}</span>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="bg-surface p-6 rounded-xl w-full max-w-md shadow-lg border border-surface-variant">
            <h3 className="font-headline-sm text-headline-sm mb-4">Add New Department</h3>
            <form onSubmit={handleAddDept} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface">Department Name</label>
                <input 
                  type="text" 
                  value={newDeptName}
                  onChange={(e) => setNewDeptName(e.target.value)}
                  className="px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="e.g., Parks & Recreation"
                  autoFocus
                />
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-on-surface-variant hover:text-on-surface bg-transparent border-none cursor-pointer">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary text-on-primary rounded-md shadow-sm border-none cursor-pointer">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
