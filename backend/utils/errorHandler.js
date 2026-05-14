// Custom Error Handler Class
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Validation Error Handler
export const handleValidationError = (errors) => {
  const extractedErrors = [];
  errors.array().forEach((err) => {
    extractedErrors.push({
      field: err.param,
      message: err.msg,
    });
  });
  return extractedErrors;
};

// MongoDB Duplicate Key Error Handler
export const handleDuplicateKeyError = (error) => {
  const field = Object.keys(error.keyPattern)[0];
  return new AppError(`${field} already exists. Please use another one.`, 400);
};

// JWT Error Handler
export const handleJWTError = () => {
  return new AppError('Invalid token. Please log in again!', 401);
};

export const handleJWTExpiredError = () => {
  return new AppError('Your token has expired! Please log in again.', 401);
};
