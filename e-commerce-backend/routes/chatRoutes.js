const express = require("express");
const chatRoutes = express.Router();
const { queryGPT } = require("../controllers/chatControllers");

chatRoutes.post("/", queryGPT);
module.exports = chatRoutes;