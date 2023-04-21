import mongoose from "mongoose";
const cateblogSchema = mongoose.Schema(
  {
    namecateBlog: String,
  },
  { timestamps: true }
);
export default mongoose.model("categoryblogs", cateblogSchema);
