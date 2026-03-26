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
* **Prisma** For ORM Visualizer

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

## 🚀 Quick Start (Recommended)

1. **Clone & Setup:**
```bash
git clone https://github.com/Artur-Nayman/GameLib.git
cd GameLib
cp .env.example .env  # Configure your .env
```

2. **Launch Services:**
The easiest way is to use the integrated root-level scripts:
```bash
npm run db:up         # Start the database container
npm run install-all   # Install all dependencies (Client & Server)
npm run prisma:migrate # Apply database migrations
npm run dev           # Launch both Client & Server concurrently
```

*Windows Users: You can also double-click **`dev.bat`** to start everything in separate windows.*

---

## 🛠 Project Management Scripts

You can run these from the root directory to manage both parts of the project:

- **`npm run dev`**: Starts everything (Client + Server).
- **`npm run install-all`**: Installs dependencies for both directories.
- **`npm run db:up`**: Starts only the Postgres database in Docker.
- **`npm run db:down`**: Stops all project containers.
- **`npm run prisma:migrate`**: Syncs your local database with the Prisma schema.
- **`npm run prisma:studio`**: Opens the Prisma Studio database viewer.

---

## 🏗 Project Architecture

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
