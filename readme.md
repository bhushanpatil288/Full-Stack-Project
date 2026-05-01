# API Auth Project

A full-stack authentication application built with React (frontend) and Node.js/Express (backend).

## Tech Stack

### Frontend
- React 19
- Vite
- Redux Toolkit
- Tailwind CSS
- Axios
- Vitest for testing

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- Cookie Parser
- CORS

## Project Structure

```
api-auth-project/
├── backend/          # Node.js/Express server
├── client/           # React frontend
└── readme.md         # This file
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=8000
   MONGODB_URI=mongodb://localhost:27017/api-auth-db
   JWT_SECRET=your-secret-key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:8000`.

## Available Scripts

### Backend
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run test` - Run tests with Vitest

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

This project is licensed under the ISC License.