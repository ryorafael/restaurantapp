# 🍽️ Le Fou Frog Restaurant App

A full-stack restaurant application designed to manage reservations, user registrations, and admin control over bookings and events. Built with React, Express.js, and MySQL integration, this app provides a smooth experience for both customers and restaurant staff.

## 🧑‍🍳 Features

### 👥 User Side

* Register and log in to manage reservations
* Make a reservation with date/time and party size
* View personal reservation history

### 👨‍💼 Admin Side

* Log in to view all user reservations
* Admin-only access control for sensitive routes

### 🗖️ Reservation Rules

* Date cannot be in the past
* No reservations on Mondays, Christmas, Easter, or Thanksgiving
* Time restrictions vary by day
* Party size max: 6 guests

## ⚙️ Tech Stack

### Frontend

* React (with React Router)
* Axios for API requests

### Backend

* Express.js
* JWT Authentication
* bcrypt for password hashing
* Sequelize (MySQL ORM)
* MySQL for user and reservation management

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ryorafael/restaurantapp.git
cd restaurantapp
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

#### Create an `.env` file in `/backend` with the following keys:

```
PORT=
JWT_SECRET=
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

**Note:** Never commit this file to Git. It's listed in `.gitignore`.bash
PORT=5000
JWT\_SECRET=your\_jwt\_secret
DB\_HOST=localhost
DB\_USER=root
DB\_PASSWORD=your\_password
DB\_NAME=restaurantdb

````

### 3. Start Backend
```bash
node server.js
````

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
2. Update the user's role manually in the MySQL DB or use `hashPassword.js` to update the admin password.

## 📝 Deployment & Testing

* Backend is dockerized (`Dockerfile` available)
* End-to-end tests written with **Playwright**
* CI/CD pipeline runs tests on **GitHub Actions**

## 📸 Screenshots

*Coming soon: include screenshots of homepage, registration, admin view, and reservations.*

## 📩 Contact

If you want to collaborate or provide feedback, feel free to [open an issue](https://github.com/ryorafael/restaurantapp/issues) or reach out via email.

**Live Preview:** [restaurantapplefoufrog.vercel.app](https://restaurantapplefoufrog.vercel.app/)
