import { verifyToken } from '../utils/tokenUtils.js';
import User from '../models/User.js';
import { AppError } from '../utils/errorHandler.js';

// Middleware to verify JWT token and attach user to request
export const protect = async (req, res, next) => {
  try {
    let token;

    // Check for token in Authorization header or cookies
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.token) {
      token = req.cookies.token;
    }

    // Check if token exists
    if (!token) {
      return next(new AppError('Not authorized to access this route', 401));
    }

    // Verify token
    const decoded = verifyToken(token);

    // Get user from database
    const user = await User.findById(decoded.userId);

    if (!user) {
      return next(new AppError('User not found', 404));
    }

    if (!user.isActive) {
      return next(new AppError('Your account has been deactivated', 403));
    }

    // Attach user to request
    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    if (error.message === 'jwt expired') {
      return next(new AppError('Token expired. Please log in again.', 401));
    }
    return next(error);
  }
};

// Middleware to check if user is admin
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          `User role '${req.user.role}' is not authorized to access this resource`,
          403
        )
      );
    }
    next();
  };
};

// Middleware to check if user owns the resource
export const checkOwnership = async (req, res, next) => {
  try {
    const userId = req.user._id.toString();
    const resourceUserId = req.params.id;

    if (req.user.role !== 'admin' && userId !== resourceUserId) {
      return next(new AppError('Not authorized to access this resource', 403));
    }

    next();
  } catch (error) {
    next(error);
  }
};
