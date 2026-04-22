🏥 Prescripto | Modern Hospital Management System
📖 Overview
Prescripto is a scalable, full-stack Hospital Management System designed to bridge the gap between healthcare providers and patients. Built entirely on the MERN stack, it streamlines clinical workflows by offering secure authentication, real-time appointment scheduling, and dedicated administrative controls.

This project was developed with a strong emphasis on backend security, robust session management, and efficient REST API architecture.

✨ Core Features
Role-Based Access Control: Distinct, secure portals for Patients, Doctors, and Administrators.

Smart Appointment Engine: Seamless booking, rescheduling, and cancellation tracking.

Secure Backend Architecture: Utilizes Bcrypt for password hashing and JWT for stateless session management to prevent hijacking.

Media Management: Integrated with Cloudinary for scalable profile and medical image handling.

Admin Dashboard: Centralized control for managing medical staff, patient records, and system analytics.

🛠️ Tech Stack
Frontend/Admin Panel: React.js powered by Vite for lightning-fast HMR and optimized builds.

Backend: Node.js & Express.js.

Database: MongoDB (Atlas) for flexible, document-based data storage.

Authentication & Security: JSON Web Tokens (JWT) & Bcrypt.

File Uploads: Multer & Cloudinary API.

🚀 Getting Started
Follow these steps to run the complete monorepo setup locally.

1. Clone the Repository
Bash
git clone https://github.com/yourusername/prescripto.git
cd prescripto
2. Environment Configuration
You must configure three separate .env files for the system to communicate properly.

Backend (backend/.env)

Code snippet
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_random_string

# Admin Portal Access
ADMIN_EMAIL=admin@prescripto.com
ADMIN_PASSWORD=your_secure_password

# Cloudinary Integration
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key
Frontend (frontend/.env) & Admin (admin/.env)

Code snippet
VITE_BACKEND_URL='http://localhost:5000'
3. Install Dependencies & Run
Since this project uses a monorepo structure, you will need to open three separate terminal windows.

Terminal 1: Start the Backend API

Bash
cd backend
npm install
npm run server
Terminal 2: Start the Admin Panel

Bash
cd admin
npm install
npm run dev
Terminal 3: Start the Patient Frontend

Bash
cd frontend
npm install
npm run dev
🌐 Live Deployment
The infrastructure is fully deployed using serverless architecture on Vercel and Render.

Backend API: Prescripto API

Patient Portal: Prescripto Live

Admin Dashboard: Admin Live

👨‍💻 Author
Sakib Malik

Focus: Backend Engineering, C++ Algorithms, & Full-Stack Architecture.