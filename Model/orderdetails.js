import mongoose from "mongoose";
const orderdetailSchema = mongoose.Schema(
  {
    list: [
      {
        nameProduct: {
          type: String,
          require: true,
        },
        price: {
          type: String,
          require: true,
        },
        quantity: {
          type: Number,
          require: true,
        },
        brand: String,
        imgProduct: [String],
        size: String,
        color: String,
        categoryId: {
          type: mongoose.Types.ObjectId,
          ref: "CategoryProducts",
        },
      },
    ],
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
