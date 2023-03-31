import mongoose from "mongoose";
const cateproductShema = mongoose.Schema(
  {
    nameCategory: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model("CategoryProducts", cateproductShema);
