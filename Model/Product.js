import mongoose from "mongoose";
const productShema = mongoose.Schema(
  {
    nameProduct: {
      type: String,
      require: true,
    },
    price:{
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    brand:String,
    imgProduct: [String],
    size: {
      type: [String],
      require: true,
    },
    colors: {
      type: [String],
      require: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "CategoryProducts",
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("product", productShema);
