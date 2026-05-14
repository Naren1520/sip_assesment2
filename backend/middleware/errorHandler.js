import { AppError, handleDuplicateKeyError, handleJWTError, handleJWTExpiredError } from '../utils/errorHandler.js';

// Global error handling middleware
export const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  // Handle duplicate key error from MongoDB
  if (err.code === 11000) {
    const error = handleDuplicateKeyError(err);
    err.message = error.message;
    err.statusCode = error.statusCode;
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    const error = handleJWTError();
    err.message = error.message;
    err.statusCode = error.statusCode;
  }

  if (err.name === 'TokenExpiredError') {
    const error = handleJWTExpiredError();
    err.message = error.message;
    err.statusCode = error.statusCode;
  }

  // Handle CastError (invalid MongoDB ID)
  if (err.name === 'CastError') {
    err.message = 'Invalid ID format';
    err.statusCode = 400;
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

// Middleware to handle routes that don't exist
export const notFoundHandler = (req, res, next) => {
  const error = new AppError(`Cannot find ${req.originalUrl} on this server!`, 404);
  next(error);
};
