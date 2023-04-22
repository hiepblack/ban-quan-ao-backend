import mongoose from "mongoose";
const orderSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    oderdetailId: {
      type: mongoose.Types.ObjectId,
      ref: "orderdetails",
    },
    totalAmount: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    note: {
      type: String,
      require: true,
    },
    orderstatus: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("orders", orderSchema);
