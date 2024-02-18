const express = require('express');
const { createUser, loginUser } = require('../controllers/authController');

const authRoutes = express.Router();
authRoutes.post("/create", createUser);
authRoutes.post("/login", loginUser);

module.exports = authRoutes;