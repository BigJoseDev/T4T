// user auth api routes
const express = require('express');
const { 
  registerUser, 
  loginUser, 
  forgotPassword, 
  confirmOtp, 
  getAllAdmins, 
  getAllUsers, 
  loginAsAdmin 
} = require('../controllers/userController');

const router = express.Router();

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Forgot password (send OTP)
router.post('/forgot-password', forgotPassword);

// Confirm OTP and reset password
router.post('/confirm-otp', confirmOtp);

// Fetch all admin users
router.get('/admins', getAllAdmins);

// Fetch all normal users
router.get('/users', getAllUsers);

// Admin login
router.post('/login-as-admin', loginAsAdmin);

module.exports = router;
