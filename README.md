🎮 GameLib: The Ultimate Games Aggregator

GameLib is a high-performance web application designed for gamers to centralize their libraries from different platforms like Steam, Epic Games, and GOG. It focuses on inventory management, duplicate prevention, and cross-platform library viewing.
🚀 Technical Stack
Frontend

    Library: React.js (Vite-powered)

    State Management: Zustand

    Styling: Tailwind CSS v4 + PostCSS

    Icons: Lucide-React

    API Client: Axios

Backend

    Runtime: Node.js

    Framework: Express.js

    Database: PostgreSQL (Structured via SQL)

    Authentication: JWT (JSON Web Tokens) & Bcrypt

External Data Providers

    Steam API: Real-time library synchronization.

    IGDB (Twitch API): Professional game metadata, tags, and categories.

    SteamGridDB: High-fidelity vertical game posters (600x900).

    ProtonDB: Linux & Steam Deck compatibility status.

📁 Project Structure

The project uses a Monorepo structure to keep the client and server code organized in one place:
Plaintext

gamelib/
├── client/                # Frontend: React Application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── store/         # Zustand state stores
│   │   ├── assets/        # Static assets & global styles
│   │   └── App.jsx        # Main application entry
│   ├── tailwind.config.js # Tailwind v4 configuration
│   └── package.json
├── server/                # Backend: Node.js API
│   ├── src/
│   │   ├── controllers/   # Request handlers
│   │   ├── routes/        # API route definitions
│   │   ├── services/      # External API integrations
│   │   └── app.js         # Express server entry
│   └── .env               # Environment secrets
└── README.md

🛠️ Environment Setup

To run this project locally, you need to set up environment variables for both the server and client.
Server (server/.env)


PORT=5000
DB_HOST=localhost
DB_NAME=gamelib_db
JWT_SECRET=your_jwt_secret
STEAM_API_KEY=your_steam_key
IGDB_CLIENT_ID=your_igdb_id
IGDB_CLIENT_SECRET=your_igdb_secret
STEAMGRIDDB_API_KEY=your_steamgrid_key

Client (client/.env)


VITE_API_URL=http://localhost:5000/api/v1

⚙️ Installation & Getting Started
1. Clone the repository
Bash

git clone https://github.com/yourusername/gamelib.git
cd gamelib

2. Setup the Server
Bash

cd server
npm install
npm run dev

3. Setup the Client
Bash

cd ../client
npm install --legacy-peer-deps
npm run dev

    Note: The --legacy-peer-deps flag is required to handle ESLint versioning conflicts between Vite and React.

✨ Key Features

    Platform Sync: Connect Steam, Epic, and GOG accounts to fetch owned games.

    Deduplication Engine: Automatically merges same games from different stores into one entry.

    Visual Grid: Beautiful 2:3 aspect ratio posters fetched via SteamGridDB.

    Proton Status: Instant check if a game is playable on Linux or Steam Deck.

    Library Comparison: Compare collections with friends to find common games.

    Privacy First: Hide specific games or entire profiles from public search.


📄 License

This project is developed for educational purposes. All rights to game-related data and images belong to their respective owners (Steam, Valve, IGDB, etc.)