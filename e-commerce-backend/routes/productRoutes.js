const express = require("express");
const {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.post("/", createProduct);
productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getProduct);
productRoutes.put("/:id", updateProduct);
productRoutes.delete("/:id", deleteProduct);

module.exports = productRoutes;