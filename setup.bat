@echo off
REM AuthPlatform Setup Script for Windows
REM This script sets up both frontend and backend automatically

setlocal enabledelayedexpansion

echo.
echo =====================================================
echo          AuthPlatform Installation Script
echo =====================================================
echo.

REM Check Node.js
echo Checking Node.js installation...
where node >nul 2>nul
if errorlevel 1 (
    echo ERROR: Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✓ Node.js %NODE_VERSION%
echo.

REM Check npm
echo Checking npm installation...
where npm >nul 2>nul
if errorlevel 1 (
    echo ERROR: npm is not installed.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo ✓ npm %NPM_VERSION%
echo.

REM Backend Setup
echo ===================================================
echo Setting up Backend...
echo ===================================================
echo.

cd backend

echo Installing backend dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install backend dependencies
    pause
    exit /b 1
)
echo ✓ Backend dependencies installed
echo.

if not exist .env (
    echo Creating .env file...
    copy .env.example .env
    echo WARNING: Please update .env with your MongoDB URI
    echo MONGODB_URI=mongodb://localhost:27017/auth_platform
    echo.
)

cd ..

REM Frontend Setup
echo ===================================================
echo Setting up Frontend...
echo ===================================================
echo.

cd frontend

echo Installing frontend dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install frontend dependencies
    pause
    exit /b 1
)
echo ✓ Frontend dependencies installed
echo.

cd ..

REM Summary
echo.
echo ===================================================
echo ✓ Installation Complete!
echo ===================================================
echo.
echo Next Steps:
echo.
echo 1. Backend:
echo    cd backend
echo    npm run dev
echo    Server runs on: http://localhost:5000
echo.
echo 2. Frontend (new terminal):
echo    cd frontend
echo    npm run dev
echo    App runs on: http://localhost:5173
echo.
echo 3. Database:
echo    Make sure MongoDB is running
echo    Update backend\.env with correct MONGODB_URI
echo.
echo Demo Credentials:
echo    Admin: admin@platform.com / admin123
echo    Student: student@platform.com / student123
echo.
echo ===================================================
echo.

pause
