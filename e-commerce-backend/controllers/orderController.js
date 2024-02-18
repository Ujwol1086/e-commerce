const Order = require("../models/Order");

const getOrders = async (req, res) =>
{
    const { id } = req.auth;
    const orders = await Order.find({
        userId: id
    });
    return res.json({
        data: orders
    });
};

const getAllOrders = async (req, res) =>
{
    const orders = await Order.find().populate("userId").populate("productId");
    return res.json({
        data: orders
    });
};

const createOrder = async (req, res) =>
{
    try
    {
        const { productId, quantity } = req.body;
        const { id } = req.auth;
        await Order.create({
            userId: id,
            productId,
            quantity
        });
        return res.json({
            message: "Order created successfully"
        });
    } catch (error)
    {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createOrder, getOrders, getAllOrders };