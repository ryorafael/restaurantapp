🍽️ Le Fou Frog Restaurant App
A full-stack restaurant reservation app for guests and administrators. Features include secure login, business rules for booking, and protected admin views.

🌐 Live : http://188.165.238.74:3010/

🧑‍🍳 Features
👥 User
Register / login with secure password hashing

Make reservations with date, time, guest count

View personal reservation history

👨‍💼 Admin
Admin login returns a JWT with role: admin

Admins can access /reservations/all to see all bookings

Normal users can only view their own

📆 Reservation Rules
❌ No past reservations

❌ Closed on: Mondays, Christmas, Easter, Thanksgiving

⏰ Time slots vary by weekday

👥 Max party size: 6 guests

⚙️ Tech Stack
Frontend (Vercel-hosted)
React + React Router

Axios

Private routes for admin access

Backend (on Ada server)
Node.js + Express.js

MySQL + Sequelize ORM

JWT Auth + bcrypt password hashing

Dockerized setup

🚀 Local Development
1. Clone Project
bash
Copy
Edit
git clone https://github.com/ryorafael/restaurantapp.git
cd restaurantapp
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file in backend/:

env
Copy
Edit
PORT=3010
JWT_SECRET=your_jwt_secret
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=restaurantdb
Start backend:

bash
Copy
Edit
node server.js
3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm start
Open http://localhost:3000

📌 Important: The frontend uses REACT_APP_API_URL=http://188.165.238.74:3010/api in production. Update .env as needed locally.

🔐 Admin Access
Register normally at /registration.

Then manually set their role via MySQL:

sql
Copy
Edit
UPDATE users SET role = 'admin' WHERE email = 'you@example.com';
Or use the hashPassword.js script in /backend/ to securely update an admin password.

✅ Testing & CI
✔️ Playwright tests

✔️ GitHub Actions CI/CD

✔️ Dockerfile for backend

📂 Folder Structure
arduino
Copy
Edit
restaurantapp/
├── backend/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── styles/
│   ├── assets/
│   └── App.js
📸 Screenshots
Screenshots of homepage, booking form, and admin dashboard coming soon.

💬 Contact
Want to contribute or ask a question?
Open an issue on GitHub
