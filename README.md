# 🔐 AuthPlatform - Secure Learning Platform

A production-ready full-stack authentication and authorization system for a modern learning platform with role-based access control, secure JWT-based authentication, and beautiful responsive dashboards.

## ✨ Features

### 🔑 Authentication & Security
- ✅ User registration with email validation
- ✅ Secure login with JWT tokens
- ✅ Bcrypt password hashing (10 salt rounds)
- ✅ HTTP-only secure cookies
- ✅ Token refresh and session management
- ✅ Protected API endpoints
- ✅ Input validation and sanitization
- ✅ CORS protection

### 👥 Role-Based Access Control
- ✅ Admin Role: Full system access
- ✅ Student Role: Personal dashboard and profile management
- ✅ Role-based middleware
- ✅ Resource ownership verification

### 🎨 Frontend Features
- ✅ Modern, responsive dark UI
- ✅ Glassmorphism design
- ✅ Smooth animations with Framer Motion
- ✅ Real-time form validation
- ✅ Toast notifications
- ✅ Loading states and skeleton loaders
- ✅ Tailwind CSS styling
- ✅ Mobile-friendly navigation

### 📊 Dashboard Features

#### Admin Dashboard
- 📈 System statistics (Total Users, Admins, Students)
- 👥 User management table
- 🔍 Search and filter users
- 🗑️ Delete user functionality
- 📋 User activity tracking

#### Student Dashboard
- 👤 Profile management
- 📝 Personal account settings
- 📊 Account statistics
- 🔐 Password change functionality
- 📆 Account creation date

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Express Validator** - Input validation
- **CORS** - Cross-origin requests
- **Cookie Parser** - Cookie handling

## 📁 Project Structure

```
assignment2/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Auth logic
│   │   ├── adminController.js    # Admin operations
│   │   └── studentController.js  # Student operations
│   ├── middleware/
│   │   ├── auth.js               # JWT verification
│   │   ├── validation.js         # Input validation
│   │   └── errorHandler.js       # Error handling
│   ├── models/
│   │   └── User.js               # User schema
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   ├── adminRoutes.js        # Admin endpoints
│   │   └── studentRoutes.js      # Student endpoints
│   ├── utils/
│   │   ├── tokenUtils.js         # JWT utilities
│   │   └── errorHandler.js       # Error classes
│   ├── .env.example
│   ├── package.json
│   └── server.js                 # Entry point
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Toast.jsx
    │   │   ├── FormComponents.jsx
    │   │   └── Cards.jsx
    │   ├── pages/
    │   │   ├── LandingPage.jsx
    │   │   ├── LoginPage.jsx
    │   │   ├── RegisterPage.jsx
    │   │   ├── AdminDashboard.jsx
    │   │   ├── StudentDashboard.jsx
    │   │   ├── UnauthorizedPage.jsx
    │   │   └── NotFoundPage.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx    # Auth state management
    │   ├── services/
    │   │   └── api.js             # API calls
    │   ├── hooks/
    │   │   └── useAuth.js         # Auth hook
    │   ├── routes/
    │   │   └── ProtectedRoute.jsx
    │   ├── layouts/
    │   │   └── DashboardLayout.jsx
    │   ├── App.jsx                # Main component
    │   ├── main.jsx               # Entry point
    │   └── index.css              # Global styles
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. **Install dependencies:**
```bash
cd backend
npm install
```

2. **Create `.env` file:**
```bash
cp .env.example .env
```

3. **Configure environment variables:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/auth_platform
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
API_BASE_URL=http://localhost:5000
```

4. **Start the server:**
```bash
npm run dev
```

Server will run on `http://localhost:5000`

### Frontend Setup

1. **Install dependencies:**
```bash
cd frontend
npm install
```

2. **Start development server:**
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## 🔐 API Endpoints

### Authentication Routes (`/api/auth`)
```
POST   /auth/register        # Register new user
POST   /auth/login           # Login user
GET    /auth/logout          # Logout user
GET    /auth/me              # Get current user (protected)
```

### Admin Routes (`/api/admin`)
```
GET    /admin/users          # Get all users (admin only)
GET    /admin/users/:id      # Get user by ID (admin only)
DELETE /admin/users/:id      # Delete user (admin only)
PUT    /admin/users/:id/role # Update user role (admin only)
```

### Student Routes (`/api/student`)
```
GET    /student/profile              # Get profile
PUT    /student/profile              # Update profile
POST   /student/change-password      # Change password
GET    /student/dashboard-stats      # Get dashboard stats
```

## 👤 Sample Credentials

### Admin Account
- **Email:** admin@platform.com
- **Password:** admin123
- **Role:** admin

### Student Account
- **Email:** student@platform.com
- **Password:** student123
- **Role:** student

**Note:** These are demo credentials. Change them in production!

## 🔄 Authentication Flow

1. User registers with email and password
2. Password is hashed with bcrypt (10 rounds)
3. User receives JWT token
4. Token stored in localStorage and cookies
5. Token sent in Authorization header for protected routes
6. Middleware verifies token and attaches user to request
7. Role middleware checks permissions
8. Response returned based on authorization

## 📝 API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* response data */ }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "errors": [ /* validation errors */ ]
}
```

## 🛡️ Security Features

- ✅ **JWT Authentication** - Stateless token-based auth
- ✅ **Password Hashing** - Bcrypt with 10 salt rounds
- ✅ **HTTP-Only Cookies** - Secure token storage
- ✅ **CORS Protection** - Restricted origins
- ✅ **Input Validation** - Server-side validation
- ✅ **Role-Based Access** - Fine-grained permissions
- ✅ **Token Expiration** - 7-day expiry
- ✅ **Error Handling** - Proper status codes
- ✅ **Environment Variables** - Sensitive data protection
- ✅ **Database Indexing** - Email uniqueness

## 🧪 Testing API with Postman

1. Import `postman-collection.json` into Postman
2. Set environment variables:
   - `base_url`: http://localhost:5000
   - `token`: (auto-filled after login)
3. Test endpoints in order:
   - Register → Login → Admin/Student routes

## 📦 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist folder
```

### Backend (Render/Heroku/Railway)
```bash
# Push to Git
# Deploy with environment variables
```

### Database (MongoDB Atlas)
```bash
# Create cluster
# Get connection string
# Add to .env as MONGODB_URI
```

## 🎨 UI/UX Features

- **Dark Modern Theme** - Eye-friendly dark interface
- **Glassmorphism Cards** - Modern frosted glass effect
- **Gradient Backgrounds** - Purple to Indigo gradient
- **Smooth Animations** - Framer Motion transitions
- **Responsive Design** - Mobile to desktop
- **Loading States** - Skeleton loaders
- **Toast Notifications** - User feedback
- **Icon System** - Lucide React icons
- **Accessible Forms** - Proper labels and validation

## 🚨 Error Handling

- **400** - Bad Request (validation error)
- **401** - Unauthorized (invalid token)
- **403** - Forbidden (insufficient permissions)
- **404** - Not Found (resource not found)
- **500** - Internal Server Error

## 📚 Code Quality

- ✅ Clean, readable code
- ✅ Proper error handling
- ✅ Input validation
- ✅ Reusable components
- ✅ MVC architecture (backend)
- ✅ Modular structure
- ✅ Comments for complex logic
- ✅ Environment-based configuration

## 🔗 Useful Resources

- [JWT Documentation](https://jwt.io)
- [Express.js Guide](https://expressjs.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Framer Motion](https://www.framer.com/motion)

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📄 License

MIT License - Feel free to use in your projects

## 🎯 What You Learned

- ✅ Full-stack authentication system
- ✅ JWT token management
- ✅ Role-based access control
- ✅ Secure password hashing
- ✅ React Context API
- ✅ Express middleware
- ✅ MongoDB schemas
- ✅ RESTful API design
- ✅ Form validation
- ✅ Error handling
- ✅ Modern UI/UX patterns
- ✅ Production-ready code

## 💡 Next Steps

- Add email verification
- Implement password reset
- Add OAuth integration
- Implement refresh tokens
- Add 2FA authentication
- Create admin analytics dashboard
- Add user activity logging
- Implement rate limiting
- Add file upload functionality

---

**Built with ❤️ for secure learning**

Happy coding! 🚀
