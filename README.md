# CivicPulse — The Solver

## 🚀 About the Project
**CivicPulse** is a real-time, citizen-facing civic issue reporting and resolution platform. It bridges the gap between everyday citizens and municipal authorities, empowering users to report infrastructural issues like potholes, water leakage, broken streetlights, and sanitation problems quickly and effectively.

## 🎯 For Whom is it Made?
CivicPulse serves two primary groups:
1. **Citizens:** Individuals who experience civic problems in their neighborhoods and need a seamless, accessible way to report them, track their status, and seek community support (via upvoting issues).
2. **Municipal Authorities & Admins:** Government officials and department heads who need a centralized dashboard to triage, verify, and resolve issues efficiently. The system includes features to automatically assign issues to the correct department (e.g., Water Works, Electricity, PWD) based on the reported category.

## 💡 What Problem Does it Solve?
Traditionally, reporting civic problems is a tedious process involving physical forms, disconnected helplines, or opaque government portals. Citizens rarely get updates on their reports, leading to frustration and civic apathy.

**CivicPulse solves this by:**
- **Providing Transparency:** Citizens can track the exact status of their issue (Reported → In Progress → Resolved).
- **Fostering Community:** A public "Community Feed" and "Civic Reels" feature allow citizens to see issues reported by others in their area, preventing duplicate reports and allowing them to rally support through upvotes.
- **Streamlining Admin Workflows:** An intelligent control panel for admins helps them monitor pending queues, assign tasks directly to specialized departments, and broadcast updates back to the citizens instantly.

## 🛠️ Features
- **Real-Time Issue Tracking:** Issues and status changes sync in real-time across citizen and admin dashboards.
- **Civic Reels & Media Uploads:** Users can upload videos (reels) and images as evidence for their reports.
- **Multilingual Support:** Ready to be translated to serve diverse populations.
- **Department Auto-Assignment:** Streamlines government response times.
- **Demo Mode:** Fully functional localized demo mode for easy testing and showcasing without requiring complex backend setup.

## ⚙️ Setup & Installation

Follow these steps to run CivicPulse locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/tambolevinayak-beep/CODEAMBLE_TZ140_THE_SOLVER_CIVICPULSE.git
cd CODEAMBLE_TZ140_THE_SOLVER_CIVICPULSE
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
To connect to the backend, you need to set up your Supabase environment variables.
1. Create a copy of `.env.example` and name it `.env.local` (or just `.env`).
```bash
cp .env.example .env.local
```
2. Open `.env.local` and add your Supabase URL and Anon Key:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```
*(Note: CivicPulse comes with a built-in **Demo Mode** that mocks database calls if authentication is disabled, allowing you to test the UI without a database!)*

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---
*Built by The Solver-T140*
