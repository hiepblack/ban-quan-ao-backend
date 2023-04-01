import mongoose from "mongoose";
const orderdetailSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
    price: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    discount: String,
  },
  { timestamps: true }
);
export default mongoose.model("orderdetails", orderdetailSchema);
