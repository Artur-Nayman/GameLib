---

# 🎮 GameLib – The Ultimate Games Aggregator

**GameLib** is a high-performance web application that allows gamers to centralize their libraries from multiple platforms such as Steam, Epic Games, and GOG.

The application focuses on:

* 📦 Inventory management
* 🔁 Duplicate prevention
* 🌍 Cross-platform library viewing
* 🐧 Linux & Steam Deck compatibility insights

---

# 🚀 Tech Stack

## Frontend

* **Library:** React.js (powered by Vite)
* **State Management:** Zustand
* **Styling:** Tailwind CSS v4 + PostCSS
* **Icons:** Lucide-React
* **HTTP Client:** Axios

## Backend

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL (structured with SQL)
* **Authentication:** JWT (JSON Web Tokens) + Bcrypt

## External Data Providers

* **Steam API** – Real-time user library synchronization
* **IGDB (Twitch API)** – Game metadata, tags, and categories
* **SteamGridDB** – High-quality vertical posters (600×900)
* **ProtonDB** – Linux & Steam Deck compatibility status

---

# 📁 Project Structure

GameLib uses a **monorepo architecture** to keep both client and server code organized in a single repository.

```
gamelib/
├── client/                # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── store/         # Zustand state stores
│   │   ├── assets/        # Static assets & global styles
│   │   └── App.jsx        # Main application entry
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                # Backend (Node.js + Express)
│   ├── src/
│   │   ├── controllers/   # Request handlers
│   │   ├── routes/        # API route definitions
│   │   ├── services/      # External API integrations
│   │   └── app.js         # Express server entry
│   ├── package.json
│   └── .env               # Environment variables
│
└── README.md
```

---

# 🛠️ Environment Setup

To run the project locally, configure environment variables for both **server** and **client**.

## Server (`server/.env`)

```
PORT=5000
DB_HOST=localhost
DB_NAME=gamelib_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password

JWT_SECRET=your_jwt_secret

STEAM_API_KEY=your_steam_key
IGDB_CLIENT_ID=your_igdb_id
IGDB_CLIENT_SECRET=your_igdb_secret
STEAMGRIDDB_API_KEY=your_steamgrid_key
```

## Client (`client/.env`)

```
VITE_API_URL=http://localhost:5000/api/v1
```

---

# ⚙️ Installation & Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/gamelib.git
cd gamelib
```

---

## 2️⃣ Setup the Server

```bash
cd server
npm install
npm run dev
```

The backend server will run on:

```
http://localhost:5000
```

---

## 3️⃣ Setup the Client

```bash
cd ../client
npm install --legacy-peer-deps
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

> ⚠️ The `--legacy-peer-deps` flag is required to resolve ESLint version conflicts between Vite and React.

---

# ✨ Key Features

* 🔗 **Platform Sync**
  Connect Steam, Epic, and GOG accounts to fetch owned games.

* 🧠 **Deduplication Engine**
  Automatically merges identical games from different stores into a single unified entry.

* 🖼️ **Visual Grid Interface**
  Clean 2:3 poster layout powered by SteamGridDB assets.

* 🐧 **Proton Status Check**
  Instantly verify Linux & Steam Deck compatibility.

* 👥 **Library Comparison**
  Compare collections with friends to discover shared titles.

* 🔒 **Privacy Controls**
  Hide specific games or entire profiles from public search.

---

# 🧪 Development Notes

* PostgreSQL must be running locally before starting the server.
* API keys for Steam, IGDB, and SteamGridDB are required for full functionality.
* Make sure CORS is properly configured in the backend for local development.

---

# 📄 License

This project is developed for **educational purposes only**.

All rights to game-related data, images, and platform assets belong to their respective owners (Steam, Valve, IGDB, etc.).

---

