# API Auth Project - Backend

Node.js/Express backend for the API Auth Project.

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Cookie Parser for handling cookies
- CORS for cross-origin requests
- Nodemon for development

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Environment Setup

Create a `.env` file in the root of the backend directory with the following variables:

```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/api-auth-db
JWT_SECRET=your-secret-key-here
```

### Development

Start the development server with automatic reloading:
```bash
npm run dev
```

The server will start on `http://localhost:8000`.

## Project Structure

```
backend/
├── index.js              # Server entry point
├── package.json          # Dependencies and scripts
├── src/
│   ├── app.js            # Express app setup
│   ├── config/
│   │   └── env.js        # Environment configuration
│   ├── controllers/
│   │   └── healthcheck.controller.js  # Health check endpoint
│   ├── db/
│   │   └── connectDB.js  # Database connection
│   ├── middlewares/
│   │   └── error.middleware.js  # Error handling middleware
│   ├── routes/
│   │   └── healthcheck.route.js  # Health check routes
│   └── utils/
│       ├── ApiError.js   # Custom error class
│       └── ApiResponse.js # API response utility
└── readme.md             # This file
```

## API Endpoints

### Health Check
- `GET /api/v1/healthcheck` - Check server status

## Features

- RESTful API design
- JWT-based authentication
- MongoDB integration
- Error handling middleware
- CORS support
- Cookie-based sessions
- Modular architecture