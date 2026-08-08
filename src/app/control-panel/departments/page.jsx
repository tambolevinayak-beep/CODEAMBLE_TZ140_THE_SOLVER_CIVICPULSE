'use client';
import { useState } from 'react';
import { getAllDepartments } from '@/data/store';
import { CATEGORIES } from '@/data/mockData';

export default function CPDepartments() {
  const [departments, setDepartments] = useState(() => getAllDepartments());
  const [showModal, setShowModal] = useState(false);
  const [newDeptName, setNewDeptName] = useState('');
  const [newCategory, setNewCategory] = useState('road_damage');
  const [newEmail, setNewEmail] = useState('');

  const handleAddDept = (e) => {
    e.preventDefault();
    if (!newDeptName.trim()) return;

    const newDept = {
      id: `dept-${Date.now()}`,
      name: newDeptName,
      category: newCategory,
      contact_email: newEmail || 'official@civicpulse.gov',
      webhook_url: `https://api.civicpulse.gov/v1/dept/${newCategory}`,
    };

    setDepartments((prev) => [...prev, newDept]);
    setNewDeptName('');
    setNewEmail('');
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#dfe3e8] shadow-sm">
        <div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#006493]/10 text-[#006493] text-xs font-bold mb-1">
            <span className="material-symbols-outlined text-[14px]">apartment</span>
            Municipal Governance Routing
          </div>
          <h1 className="text-2xl font-bold text-[#181c20]">Department Directory</h1>
          <p className="text-xs text-[#6f7881]">Configure municipal departments, SLA webhooks, and escalation routing rules.</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#006493] hover:bg-[#004b70] text-white px-4 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">add_business</span>
          Add Department
        </button>
      </div>

      {/* Department Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => {
          const cat = CATEGORIES.find((c) => c.id === dept.category);
          return (
            <div key={dept.id} className="bg-white rounded-xl border border-[#dfe3e8] p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2e9cdb]/10 text-[#006493] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">building_surveys</span>
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#181c20]">{dept.name}</h3>
                  <span className="text-[11px] font-bold text-[#006493] uppercase">
                    {cat?.label || dept.category}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#f0f4f9] rounded-lg text-xs space-y-1.5 text-[#3f4850]">
                <div className="flex items-center justify-between">
                  <span className="text-[#6f7881]">Contact Email:</span>
                  <span className="font-semibold text-[#181c20]">{dept.contact_email || 'dept@civicpulse.gov'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6f7881]">Escalation Webhook:</span>
                  <span className="font-semibold text-[#006493]">Configured</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#dfe3e8] flex justify-end">
                <button className="text-xs font-bold text-[#006493] hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">edit</span> Edit Config
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#dfe3e8] pb-3">
              <h3 className="font-bold text-base text-[#181c20]">Add Municipal Department</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleAddDept} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#181c20] mb-1">Department Name</label>
                <input
                  type="text"
                  value={newDeptName}
                  onChange={(e) => setNewDeptName(e.target.value)}
                  placeholder="e.g. Municipal Water Board"
                  required
                  className="w-full bg-white border border-[#bec7d1] rounded-lg px-3 py-2 text-xs text-[#181c20] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#181c20] mb-1">Category Routing</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full bg-white border border-[#bec7d1] rounded-lg px-3 py-2 text-xs text-[#181c20] outline-none"
                >
                  <option value="road_damage">Road Damage</option>
                  <option value="garbage">Sanitation</option>
                  <option value="water_leak">Water Supply</option>
                  <option value="sewage">Sewage & Drainage</option>
                  <option value="streetlight">Street Lighting</option>
                  <option value="electrical">Electrical Hazard</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#181c20] mb-1">Contact Email</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="contact@dept.gov"
                  className="w-full bg-white border border-[#bec7d1] rounded-lg px-3 py-2 text-xs text-[#181c20] outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-[#ebeef4] text-[#181c20] font-bold text-xs rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#006493] text-white font-bold text-xs rounded-lg hover:bg-[#004b70] transition-colors"
                >
                  Add Department
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
