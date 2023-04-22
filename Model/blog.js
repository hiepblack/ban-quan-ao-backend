import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: String,
    author: String,
    imgBlog: String,
    sortDesc: String,
    description: [
      {
        header: String,
        thumbnail: [
          {
            image: String,
            descImage: String,
          },
        ],
        footer: String,
      },
    ],
    cateBlogId: {
      type: mongoose.Types.ObjectId,
      ref: "categoryblogs",
    },
  },
  { timestamps: true }
);
export default mongoose.model("blogs", blogSchema);