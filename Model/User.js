import mongoose from "mongoose";
const sigupShema = mongoose.Schema(
  {
    userName: String,
    email: {
      type: String,
      require: true,
    },
    passWord: {
      type: String,
      require: true,
    },
    image: String,
    role: {
      type: String,
      default: "member",
    },
  },
  { timestamps: true }
);
export default mongoose.model("users", sigupShema);
