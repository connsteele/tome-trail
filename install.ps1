# Navigate to the backend directory and install dependencies
Write-Output "Installing backend dependencies..."
Set-Location -Path "backend"
pnpm install necessary modules

# Navigate back to the root directory
Set-Location -Path ".."

# Navigate to the frontend directory and install dependencies
Write-Output "Installing frontend dependencies..."
Set-Location -Path "frontend"
pnpm install necessary modules

# Navigate back to the root directory
Set-Location -Path ".."

Write-Output "Dependencies installed for both frontend and backend."