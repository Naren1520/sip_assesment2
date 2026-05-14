#!/usr/bin/env bash

# AuthPlatform Setup Script
# This script sets up both frontend and backend automatically

set -e

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                                                              ║"
echo "║           🚀 AuthPlatform Installation Script 🚀             ║"
echo "║                                                              ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js
echo -e "${BLUE}Checking Node.js installation...${NC}"
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi
echo -e "${GREEN}✓ Node.js $(node -v)${NC}"
echo ""

# Check npm
echo -e "${BLUE}Checking npm installation...${NC}"
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi
echo -e "${GREEN}✓ npm $(npm -v)${NC}"
echo ""

# Backend Setup
echo -e "${YELLOW}═══════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}Setting up Backend...${NC}"
echo -e "${YELLOW}═══════════════════════════════════════════════════════════════${NC}"
echo ""

cd backend

echo -e "${BLUE}Installing backend dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Backend dependencies installed${NC}"
echo ""

if [ ! -f .env ]; then
    echo -e "${BLUE}Creating .env file...${NC}"
    cp .env.example .env
    echo -e "${YELLOW}⚠ Please update .env with your MongoDB URI${NC}"
    echo -e "${YELLOW}  MONGODB_URI=mongodb://localhost:27017/auth_platform${NC}"
    echo ""
fi

cd ..

# Frontend Setup
echo -e "${YELLOW}═══════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}Setting up Frontend...${NC}"
echo -e "${YELLOW}═══════════════════════════════════════════════════════════════${NC}"
echo ""

cd frontend

echo -e "${BLUE}Installing frontend dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Frontend dependencies installed${NC}"
echo ""

cd ..

# Summary
echo ""
echo -e "${YELLOW}═══════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ Installation Complete!${NC}"
echo -e "${YELLOW}═══════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo ""
echo -e "${GREEN}1. Backend:${NC}"
echo "   cd backend"
echo "   npm run dev"
echo "   Server runs on: http://localhost:5000"
echo ""
echo -e "${GREEN}2. Frontend (new terminal):${NC}"
echo "   cd frontend"
echo "   npm run dev"
echo "   App runs on: http://localhost:5173"
echo ""
echo -e "${GREEN}3. Database:${NC}"
echo "   Make sure MongoDB is running"
echo "   Update backend/.env with correct MONGODB_URI"
echo ""
echo -e "${BLUE}Demo Credentials:${NC}"
echo "   Admin: admin@platform.com / admin123"
echo "   Student: student@platform.com / student123"
echo ""
echo -e "${YELLOW}═══════════════════════════════════════════════════════════════${NC}"
echo ""
