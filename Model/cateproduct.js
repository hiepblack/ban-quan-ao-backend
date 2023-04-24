import mongoose from "mongoose";
const cateproductShema = mongoose.Schema(
  {
    nameCategory: {
      type: String,
      require:true
    },
    image:{
      type: String,
      require:true
    }
  },
  { timestamps: true }
);
export default mongoose.model("CategoryProducts", cateproductShema);
