# 🚀 CryptoTracker Frontend

Welcome to the **CryptoTracker** frontend!
This is a modern cryptocurrency dashboard built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 📚 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [🚦 Getting Started](#-getting-started)
- [📦 Available Scripts](#-available-scripts)
- [🌳 Project Structure](#-project-structure)
- [🔌 API Integration](#-api-integration)
- [📝 Linting](#-linting)
- [📄 License](#-license)

---

## ✨ Features

- 💸 **Live cryptocurrency prices** for Bitcoin, Monero, and Toncoin
- 🌗 **Light/Dark theme** toggle
- 📊 **Interactive charts** (Chart.js)
- 💶 **European-style price formatting**
- 📈 **Market overview statistics**
- 📱 **Responsive design** for all devices

---

## 🛠️ Tech Stack

- ⚛️ **React 18** + **TypeScript**
- ⚡ **Vite** (fast dev/build)
- 🎨 **Tailwind CSS** (utility-first styling)
- 📉 **Chart.js** & **react-chartjs-2**
- 🖼️ **Lucide React** (icons)

---

## 🚦 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cryptotracker.git
cd cryptotracker/frontend

# Install dependencies
npm install
```

### 3. Running the App

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Building for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## 📦 Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Check code for errors

---

## 🌳 Project Structure

```
frontend/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── components/
│       ├── CryptoCard.tsx
│       ├── CryptoChart.tsx
│       ├── ThemeToggle.tsx
│       ├── fetchprices.tsx
│       ├── fetchchange.tsx
│       └── fetchchart.tsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

- **src/** — main source code
- **components/** — reusable UI parts
- **index.css** — global styles
- **vite.config.ts** — Vite configuration

---

## 🔌 API Integration

The frontend fetches cryptocurrency data from the backend API (see `/backend`).
By default, it expects the backend to be running at `http://localhost:5174`.

**Endpoints used:**
- `GET /bitcoin`, `/monero`, `/toncoin` — current prices
- `GET /bitcoin/change`, `/monero/change`, `/toncoin/change` — 24h price changes
- `GET /bitcoin/chart`, `/monero/chart`, `/toncoin/chart` — chart data

> You can change the backend URL in the fetch functions if needed.

---

## 📝 Linting

```bash
npm run lint
```

---

## 📄 License

MIT

---
