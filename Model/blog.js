import mongoose from "mongoose";
const blogSchema = mongoose.Schema(
  {
    title: String,
    author: String,
    imgBlog: String,
    cateBlogId: {
      type: mongoose.Types.ObjectId,
      ref: "categoryBlogs",
    },
  },
  { timestamps: true }
);
export default mongoose.model("blogs", blogSchema);
