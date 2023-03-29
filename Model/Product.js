import mongoose from "mongoose";
const productShema = mongoose.Schema({
  nameProduct: String,
  imgProduct: String,
  description: String,
});
export default mongoose.model("product", productShema);
