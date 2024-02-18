const express = require("express");
const {
    createOrder,
    getOrders,
    getAllOrders
} = require("../controllers/orderController");

const orderRoutes = express.Router();

orderRoutes.post("/", createOrder);
orderRoutes.get("/", getOrders);
orderRoutes.get("/all", getAllOrders);

module.exports = orderRoutes;