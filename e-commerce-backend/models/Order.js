const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    //   address: {
    //     type: String,
    //     required: true
    //   },
    //   city: {
    //     type: String,
    //     required: true
    //   },
    //   state: {
    //     type: String,
    //     required: true
    //   }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;