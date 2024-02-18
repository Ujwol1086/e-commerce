const Cart = require("../models/Cart");

const addToCart = async (req, res) =>
{
    try
    {
        const { productId, quantity } = req.body;
        const { id } = req.auth;
        const cart = await Cart.findOne({
            productId: productId
        });
        if (cart)
        {
            cart.quantity += 1;
            await cart.save();
        } else
        {
            await Cart.create({
                productId,
                userId: id,
                quantity
            });
        }
        return res.json({
            message: "Product added to cart successfully"
        });
    } catch (error)
    {
        return res.status(500).json({
            message: "Failed to add items to the cart",
            error: error
        });
    }
};

const getCartItems = async (req, res) =>
{
    const { id } = req.auth;
    const cart = await Cart.find({ userId: id })
        .populate("productId")
        .populate("userId");
    return res.json({
        data: cart
    });
};

module.exports = {
    addToCart,
    getCartItems
};