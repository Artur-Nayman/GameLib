# 🎮 GameLib – The Ultimate Games Aggregator

**GameLib** is a high-performance web application designed to help gamers centralize their fragmented libraries from multiple platforms—such as Steam, Epic Games, and GOG—into a single, unified ecosystem.

The project focuses on intelligent automation, cross-platform metadata synchronization, and advanced data deduplication to bridge the gap between isolated digital storefronts.

---

## 🛠 Technical Stack

### Frontend

* **Library:** React.js (Vite)
* **State Management:** Zustand
* **Styling:** Tailwind CSS v4 + PostCSS
* **Infrastructure:** Dockerized

### Backend

* **Runtime:** Node.js + Express.js
* **Database:** PostgreSQL (3NF Compliance)
* **Auth:** JWT + Bcrypt
* **Infrastructure:** Dockerized (PostgreSQL 15-alpine)

---

## 🏗 Project Architecture & Docker

GameLib follows a **Client-Server** model isolated within a Dockerized infrastructure. This ensures all developers work in a perfectly synchronized environment regardless of their host Operating System.

### Repository Structure:

```text
gamelib/
├── client/                # Frontend (React + Vite)
├── server/                # Backend (Node.js API)
├── docker-compose.yml     # Container Orchestration
├── .env.example           # Environment variables template
└── README.md              # Project documentation

```

---

## 🚀 Quick Start (Docker)

This is the **recommended** way to run the project for development.

1. **Clone the repository:**
```bash
git clone https://github.com/Artur-Nayman/GameLib.git
cd GameLib

```


2. **Set up Environment Variables:**
Create a `.env` file in the root directory based on the template:
```bash
cp .env.example .env

```


*Open `.env` and provide your local API keys for Steam, IGDB, and SteamGridDB.*
3. **Launch the environment:**
```bash
docker-compose up --build

```



**Access Points:**

* **Frontend:** [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173)
* **Backend API:** [http://localhost:5000](https://www.google.com/search?q=http://localhost:5000)
* **Database:** `localhost:5432`

---

## 🛠 Manual Setup (Non-Docker)

If you prefer running services manually on your host machine:

### 1. Backend (Server)

```bash
cd server
npm install
npm run dev

```

### 2. Frontend (Client)

```bash
cd client
npm install --legacy-peer-deps
npm run dev

```

*Note: The `--legacy-peer-deps` flag is required to resolve ESLint version conflicts between Vite and React.*

---

## 💻 Developer Workflow

### Hot Reloading

By using **Docker Volumes**, any changes made to the code in the `/client` or `/server` directories will instantly reflect inside the running containers without needing a rebuild or restart.

### Adding New Dependencies

If you need to install a new package (e.g., `npm install axios`):

1. Install it locally in the respective folder.
2. Rebuild the containers to update the image: `docker-compose up --build`.

### Internal Networking

When running via Docker, the Backend connects to the database using the hostname **`db`** (defined in docker-compose), not `localhost`.
Example: `DATABASE_URL=postgres://user:password@db:5432/gamelib`

---

## 🌿 Git Policy & Scrum Rules

We follow **Scrum methodologies**. To maintain a clean and scalable codebase, please adhere to the following branching strategy:

* **main**: Production-ready code only. Direct commits are strictly prohibited.
* **develop**: Integration branch for new features.
* **feature/feature-name**: Create a separate branch from `develop` for every task.
* **Pull Requests**: All code must undergo **Code Review** by the Lead Developer before being merged into the `develop` branch.

---

## ✨ Key Features (Roadmap)

* 🔗 **Platform Sync**: Seamless integration with Steam, Epic, and GOG via APIs.
* 🧠 **Deduplication Engine**: Intelligent merging of identical titles into a "Master Record" (3NF architecture).
* 🖼️ **Visual Grid Interface**: High-quality 2:3 poster layout powered by SteamGridDB.
* 🐧 **Proton Status**: Instant Linux & Steam Deck compatibility verification via ProtonDB metadata.
* 👥 **Social Comparison**: Library comparison tools to discover shared games with friends.

---

**Project Lead, Lead Developer & Scrum Master:** Artur Nayman
**Infrastructure Engineer & Full-stack Developer:** Sami-Severi Sjöberg
**Frontend Developer & Agile Consultant:** Susanna Lehtinen

**Project Status:** Active Development (Phase 1: Foundation & Sync)

**Organization:** theFirma – Turku University of Applied Sciences
