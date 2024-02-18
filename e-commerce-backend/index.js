const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const upload = require("./config/multerConfig");
const { expressjwt: jwt } = require("express-jwt");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const chatRoutes = require("./routes/chatRoutes");


require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());//objectformat
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.static("uploads"));

app.use("/auth", authRoutes);
app.use("/product",
    [
        jwt({
            secret: process.env.SECRET_KEY,
            algorithms: ["HS256"]
        }),
        upload.any("images")
    ],
    productRoutes
);

app.use(
    "/order",
    [
        jwt({
            secret: process.env.SECRET_KEY,
            algorithms: ["HS256"]
        })
    ],
    orderRoutes
);

app.use(
    "/cart",
    [
        jwt({
            secret: process.env.SECRET_KEY,
            algorithms: ["HS256"]
        })
    ],
    cartRoutes
);

app.use("/chat", chatRoutes);

app.use(function (err, req, res, next)
{
    if (err.name === "UnauthorizedError")
    {
        res.status(401).send({
            message: "Invalid Token"
        });
    } else
    {
        next(err);
    }
});


app.listen(8000, async () =>
{
    try
    {
        const mongoDBURL = process.env.MONGO_DB_URL;
        await mongoose.connect(mongoDBURL);
        console.log("Server Started");
    } catch (error)
    {
        console.log(error);
    }
});



