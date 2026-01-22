🚀 CodeBud

CodeBud is a full-stack web application built using React, Node.js, Express, and MongoDB, featuring user authentication, course management, email notifications, and payment integration.

📌 Tech Stack

Frontend: React (CRA)

Backend: Node.js, Express

Database: MongoDB

Email Service: Brevo (Transactional Emails)

Payments: Razorpay

Cloud Storage: Cloudinary

Deployment:

Frontend → Vercel

Backend → Render

📂 Project Structure
CodeBud/
├── Server/        # Backend (Node + Express)
└── CodeBud/       # Frontend (React)

🛠️ Getting Started (Local Setup)

Follow the steps below to run the project locally.

1️⃣ Clone the Repository
gh repo clone akshayyy13/CodeBud
cd CodeBud

2️⃣ Install Dependencies

Install dependencies separately for backend and frontend.

Backend
cd Server
npm install

Frontend
cd ../CodeBud
npm install

🔐 Environment Variables Setup
📁 Backend (Server/.env)

Create a .env file inside the Server folder and add the following:

PORT=4000
MONGODB_URL=""

JWT_SECRET=""

BREVO_API_KEY=""

FOLDER_NAME=""

RAZORPAY_KEY=""
RAZORPAY_SECRET=""

CLOUD_NAME=""
API_KEY=""
API_SECRET=""

📁 Frontend (CodeBud/.env)

Create a .env file inside the CodeBud folder:

REACT_APP_BASE_URL=http://localhost:4000/api/v1

▶️ Running the Application
Start Backend Server
cd Server
npm start

Start Frontend Server
cd ../CodeBud
npm start

🌐 Access the Application

Open your browser and visit:

Frontend: http://localhost:3000

Backend API: http://localhost:4000

📦 Production Build

To create an optimized production build for the frontend:

npm run build


This generates a build/ folder containing deployable static assets.

✨ Features

User Authentication (JWT)

Role-based access (Student / Instructor)

Course creation & enrollment

Video lectures & progress tracking

Email notifications (OTP, verification)

Secure payments using Razorpay

Cloudinary media storage

🧠 Notes

Do not commit .env files to GitHub

Ensure environment variables are properly set before deployment

Email service uses Brevo transactional emails

👩‍💻👨‍💻 Author

Akshay Shrivastava

📜 License

This project is for educational purposes.
