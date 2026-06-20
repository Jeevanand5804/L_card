# L_Card - Loyalty Rewards Platform

A full-stack web application for managing loyalty rewards and customer engagement. Built with React + Vite frontend and Node.js/Express backend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Features](#features)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning the repository)

## Project Structure

```
L_card/
├── client/              # React + Vite frontend
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page components (Home, Rewards, History, Profile)
│   │   ├── routes/      # Route configuration
│   │   ├── services/    # API service calls
│   │   └── App.jsx      # Main app component
│   ├── package.json
│   └── vite.config.js
└── server/              # Node.js/Express backend
    ├── controllers/     # Route controllers
    ├── models/         # Database models
    ├── routes/         # API routes
    ├── middleware/     # Custom middleware
    ├── server.js       # Main server file
    └── package.json
```

## Installation

### Step 1: Clone or Download the Project

```bash
# If cloning from Git
git clone <repository-url>
cd L_card
```

### Step 2: Install Server Dependencies

```bash
cd server
npm install
```

### Step 3: Install Client Dependencies

```bash
cd ../client
npm install
```

## Running the Application

### Start the Backend Server

Open a terminal in the `server` directory and run:

```bash
npm start
# or for development with auto-reload
npm run dev
```

The server will start on **http://localhost:5000**

### Start the Frontend Development Server

Open a new terminal in the `client` directory and run:

```bash
npm run dev
```

The client will start on **http://localhost:5173** (or another available port)

## Available Scripts

### Client (React + Vite)

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Server (Node.js/Express)

```bash
npm start        # Start the server
npm run dev      # Start with nodemon (auto-reload)
```

## Features

- **User Authentication** - Login and registration with JWT tokens
- **Loyalty Points** - Track and manage customer points
- **Rewards Catalog** - Browse and redeem rewards
- **Activity History** - View transaction history
- **User Profile** - Manage profile information and achievements
- **Responsive Design** - Mobile-friendly UI with Tailwind CSS
- **Real-time Updates** - Dynamic data fetching and rendering

## Troubleshooting

### Port Already in Use

If port 5000 (server) or 5173 (client) is already in use:

- **Server**: Edit `server.js` to use a different port
- **Client**: The dev server will automatically use the next available port

### Dependencies Not Installed

Make sure you run `npm install` in both the `server` and `client` directories.

### Server Connection Issues

Verify the server is running before starting the client. Check that the API endpoint in your client code matches the server URL (default: `http://localhost:5000`).

## Support

For issues or questions, please check the project documentation or contact the development team.
