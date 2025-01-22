// server entrypoint

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
connectDB();

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`✌😍Server running on port http://localhost:${PORT}`);
});
