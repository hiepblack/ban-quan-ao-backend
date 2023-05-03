import mongoose from "mongoose";
const cateproductShema = mongoose.Schema(
  {
    nameCategory: {
      type: String,
      require: true,
    },
    products: [{ type: mongoose.Types.ObjectId, ref: "Products" }],
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("CategoryProducts", cateproductShema);
