// user api endpoint controller
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Register a new user
const registerUser = async (req, res) => {
  const { username, email, password, userType } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    const user = new User({ username, email, password, userType });
    await user.save();

    const token = generateToken(user._id);

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// User login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    const token = generateToken(user._id);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Forgot password and send OTP
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    const otp = crypto.randomBytes(3).toString('hex'); // generate a 6-digit OTP
    const otpExpiration = Date.now() + 300000; // OTP valid for 5 minutes

    user.otp = otp;
    user.otpExpiration = otpExpiration;
    await user.save();

    // Send OTP via email (using Nodemailer)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'OTP for password reset',
      text: `Your OTP is: ${otp}`,
    });

    res.status(200).json({ message: "OTP sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Confirm OTP and reset password
const confirmOtp = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.otp !== otp || user.otpExpiration < Date.now()) {
      return res.status(400).json({ message: "Invalid OTP or expired!" });
    }

    user.password = newPassword;
    user.otp = undefined;
    user.otpExpiration = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Fetch all admin users
const getAllAdmins = async (req, res) => {
  try {
    const admins = await User.find({ userType: 'admin' });
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Fetch all normal users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ userType: 'user' });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Login as admin
const loginAsAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await User.findOne({ email, userType: 'admin' });
    if (!admin) {
      return res.status(400).json({ message: "Admin not found!" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    const token = generateToken(admin._id);

    res.status(200).json({ message: "Admin login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  confirmOtp,
  getAllAdmins,
  getAllUsers,
  loginAsAdmin,
};
