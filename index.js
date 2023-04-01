import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import routerAuth from "./Router/user.js";
import routerProduct from "./Router/product.js";
import routerCategoryProduct from "./Router/categoryProduct.js";
import routerOrder from "./Router/order.js";
import routerOrderdetail from "./Router/orderdetail.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

app.get("/", (req, res) => {
  res.send("api working");
});
// database connect
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connect successful");
  } catch (err) {
    console.log(err);
  }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));

app.use("/auth", routerAuth);
app.use("/products", routerProduct);
app.use("/category", routerCategoryProduct);
app.use("/order", routerOrder);
app.use("/orderdetail", routerOrderdetail);
app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
