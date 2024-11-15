#!/bin/bash

# Navigate to the backend directory and install dependencies
echo "Installing backend dependencies..."
cd backend
pnpm install necessary modules

# Navigate back to the root directory
cd ..

# Navigate to the frontend directory and install dependencies
echo "Installing frontend dependencies..."
cd frontend
pnpm install necessary modules

# Navigate back to the root directory
cd ..

echo "Dependencies installed for both frontend and backend."