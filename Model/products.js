import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productShema = mongoose.Schema(
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
    status: String,
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "comment_product",
      },
    ],
  },
  { timestamps: true }
);

productShema.plugin(mongoosePaginate);
export default mongoose.model("Product", productShema);
