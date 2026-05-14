import express from 'express';
import {
  getProfile,
  updateProfile,
  changePassword,
  getDashboardStats,
} from '../controllers/studentController.js';
import { protect, authorize } from '../middleware/auth.js';
import { validateUpdateProfile, handleValidationErrors } from '../middleware/validation.js';

const router = express.Router();

// All student routes are protected
router.use(protect);

// Profile routes
router.get('/profile', getProfile);
router.put('/profile', validateUpdateProfile, handleValidationErrors, updateProfile);
router.post('/change-password', changePassword);
router.get('/dashboard-stats', getDashboardStats);

export default router;
