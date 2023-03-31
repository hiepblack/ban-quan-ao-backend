import mongoose from "mongoose";

const commentShema = mongoose.Schema(
  {
    textComment: {
      type: String,
      require: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  },
  { timestamps: true }
);
export default mongoose.model("comment_product", commentShema);
