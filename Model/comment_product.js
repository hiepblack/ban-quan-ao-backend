import mongoose from "mongoose";

const commentShema = mongoose.Schema(
  {
    textComment: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    image:{
      type: String,
      require: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  },
  { timestamps: true }
);
export default mongoose.model("comment_product", commentShema);
