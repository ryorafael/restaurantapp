# 🍽️ Le Fou Frog Restaurant App

A full-stack restaurant application designed to manage reservations, user registrations, and admin control over bookings and events. Built with React, Express.js, and MySQL/MongoDB integration, this app provides a smooth experience for both customers and restaurant staff.

## 🧑‍🍳 Features

### 👥 User Side
- Register and log in to manage reservations
- Make a reservation with date/time and party size
- See personal reservation history

### 👨‍💼 Admin Side
- Log in to view all user reservations
- Admin-only access control for sensitive routes

### 📆 Reservation Rules
- Date cannot be in the past
- No reservations on Mondays, Christmas, Easter, or Thanksgiving
- Time restrictions by day
- Party size max: 6 guests

## ⚙️ Tech Stack

### Frontend
- React (with React Router)
- Axios for API requests

### Backend
- Express.js
- JWT Authentication
- bcrypt for password hashing
- MySQL (user + reservation management)
- MongoDB schemas (legacy or alternative structure)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/restaurantapp.git
cd restaurantapp
```

### 2. Set Up the Backend
```bash
cd backend
npm install
```

#### Create `.env` file:
```bash
PORT=5000
JWT_SECRET=your_jwt_secret
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=restaurantdb
```

### 3. Start Backend
```bash
node server.js
```

### 4. Set Up the Frontend
```bash
cd ../frontend
npm install
npm start
```

The app should open at `http://localhost:3000`.

## 📁 Folder Structure

```
restaurantapp/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── assets/
│   ├── styles/
│   └── App.js
```

## 🔐 Admin Access

To create an admin:
1. Register normally via the frontend.
2. Update the user's role manually in the MySQL DB or use `hashPassword.js` to update Ryo's admin password.

## 📝 Future Plans

- Add Stripe for gift card purchases
- Admin dashboard with event and menu management
- Email confirmations

## 📸 Screenshots

_(Add some screenshots here of the homepage, reservation form, and admin panel)_

## 📬 Contact

If you want to collaborate or provide feedback, feel free to [open an issue](https://github.com/yourusername/restaurantapp/issues) or contact me via email.