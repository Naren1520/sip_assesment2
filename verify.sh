#!/bin/bash
# Quick verification script to check project structure

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║        AuthPlatform Project Structure Verification          ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
    else
        echo -e "${RED}✗${NC} $1"
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/"
    else
        echo -e "${RED}✗${NC} $1/"
    fi
}

echo -e "${BLUE}Root Files:${NC}"
check_file "README.md"
check_file "QUICK_START.md"
check_file "API_DOCS.md"
check_file "DEPLOYMENT.md"
check_file "ARCHITECTURE.md"
check_file "FEATURES.md"
check_file "SAMPLE_DATA.md"
check_file "COMPLETION_SUMMARY.md"
check_file "INDEX.md"
check_file "postman-collection.json"
check_file "setup.sh"
check_file "setup.bat"
echo ""

echo -e "${BLUE}Backend Structure:${NC}"
check_dir "backend"
check_dir "backend/config"
check_dir "backend/models"
check_dir "backend/controllers"
check_dir "backend/middleware"
check_dir "backend/routes"
check_dir "backend/utils"
check_file "backend/server.js"
check_file "backend/package.json"
check_file "backend/.env.example"
echo ""

echo -e "${BLUE}Frontend Structure:${NC}"
check_dir "frontend"
check_dir "frontend/src"
check_dir "frontend/src/pages"
check_dir "frontend/src/components"
check_dir "frontend/src/context"
check_dir "frontend/src/services"
check_dir "frontend/src/hooks"
check_dir "frontend/src/routes"
check_dir "frontend/src/layouts"
check_file "frontend/src/App.jsx"
check_file "frontend/src/main.jsx"
check_file "frontend/package.json"
check_file "frontend/.env.example"
check_file "frontend/vite.config.js"
check_file "frontend/tailwind.config.js"
echo ""

echo -e "${BLUE}Backend Files:${NC}"
check_file "backend/config/db.js"
check_file "backend/models/User.js"
check_file "backend/controllers/authController.js"
check_file "backend/controllers/adminController.js"
check_file "backend/controllers/studentController.js"
check_file "backend/middleware/auth.js"
check_file "backend/middleware/validation.js"
check_file "backend/middleware/errorHandler.js"
check_file "backend/routes/authRoutes.js"
check_file "backend/routes/adminRoutes.js"
check_file "backend/routes/studentRoutes.js"
check_file "backend/utils/tokenUtils.js"
check_file "backend/utils/errorHandler.js"
echo ""

echo -e "${BLUE}Frontend Files:${NC}"
check_file "frontend/src/pages/LandingPage.jsx"
check_file "frontend/src/pages/LoginPage.jsx"
check_file "frontend/src/pages/RegisterPage.jsx"
check_file "frontend/src/pages/AdminDashboard.jsx"
check_file "frontend/src/pages/StudentDashboard.jsx"
check_file "frontend/src/pages/UnauthorizedPage.jsx"
check_file "frontend/src/pages/NotFoundPage.jsx"
check_file "frontend/src/components/Navbar.jsx"
check_file "frontend/src/components/Toast.jsx"
check_file "frontend/src/components/FormComponents.jsx"
check_file "frontend/src/components/Cards.jsx"
check_file "frontend/src/context/AuthContext.jsx"
check_file "frontend/src/services/api.js"
check_file "frontend/src/hooks/useAuth.js"
check_file "frontend/src/routes/ProtectedRoute.jsx"
check_file "frontend/src/layouts/DashboardLayout.jsx"
echo ""

echo -e "${GREEN}✓ Project structure verification complete!${NC}"
echo ""
echo "📚 Documentation files:"
echo "   • README.md - Start here"
echo "   • QUICK_START.md - 5 minute setup"
echo "   • INDEX.md - Navigation guide"
echo ""
echo "🚀 Next step: Run setup.bat (Windows) or setup.sh (Mac/Linux)"
echo ""
