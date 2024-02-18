const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

productSchema.post("find", function (docs, next)
{
    const API_URL = process.env.API_URL;
    docs.forEach((doc) =>
    {
        doc._doc = {
            ...doc._doc,
            image:
                doc.images && doc.images.length > 0
                    ? API_URL + "/" + doc.images[0]
                    : null
        };
    });

    next();
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
