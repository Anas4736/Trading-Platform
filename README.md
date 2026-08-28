# 💹 Zerodha - Stock Trading Platform       
 
<p align="center">
  <img src="https://imgs.search.brave.com/Z4tYWX1YZJdaGLHdutKfq3cWOsyGChpR8bOPSxe9Zxg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly96ZXJv/ZGhhLmNvbS9zdGF0/aWMvaW1hZ2VzL2xh/bmRpbmcucG5n" 
       alt="Zerodha Project Preview" 
       width="800" 
       style="border-radius: 12px; box-shadow: 0px 4px 20px rgba(0,0,0,0.25);" />
</p>

A full-stack stock trading web application allowing users to simulate buying and selling stocks, view portfolio.

> ⚠️ This is an academic project and **does not use real stock market data** or enable actual trading.

---

## 🚀 Features

- 🔐 User Registration and Login (JWT authentication)
- 📊 View and search mock stock prices
- 💸 Simulated Buy/Sell of stocks
- 📁 Portfolio management with profit/loss calculations
- 🧾 Transaction history page
- 📈 Stock charts using Chart.js/Recharts
- Responsive UI using React and Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS / Bootstrap
- React Router DOM
- Chart.js / Recharts

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js

---

## ⚙️ Project Structure

Trading-Platform/
│
├── frontend/ # React Frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
│
├── backend/ # Node.js Backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
| ├── schema/
│ └── index.js
|
├── dashboard/ # React Dashboard
│ ├── public/
│ └── src/
│ ├── components/
│ ├── App.js
│ └── index.js
│
├── .env # Environment Variables
├── README.md
└── package.json


---

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/Trading-platform.git
cd Trading-platform

#Setup Backend
cd backend
npm install
# Create a `.env` file and add MongoDB URI and JWT secret
npm start

#Setup Frontend
cd frontend
npm install
npm start

#Setup Dashboard
cd dashboard
npm install
npm start

🧪 Sample Login
You can use mock credentials or register a new user:

Email: demo@example.com
Password: demo123

📊 Mock Stock Data
All stock data is generated manually or randomized in backend.
You can modify data/stocks.json or MongoDB collection as needed.

🔒 Disclaimer
This application is a simulation and does not provide real-time or financial trading services. It is built solely for educational purposes.

---


