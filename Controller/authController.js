import User from "../Model/User.js";
import { siginShema, sigupShema } from "../validate/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { userName, email, passWord } = req.body;
    const { error } = sigupShema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((items) => items.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const userExit = await User.findOne({ email: email });
    if (userExit) {
      return res.status(400).json({
        message: "Email này đã tồn tại",
      });
    }
    const handlepassWord = await bcrypt.hash(passWord, 10);

    const newUser = await User.create({
      userName: userName,
      email: email,
      passWord: handlepassWord,
      image: req.body.image,
    });

    return res.status(201).json({
      message: "Đăng kí thành công",
      successfull: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const signin = async (req, res) => {
  try {
<<<<<<< HEAD
    const { email, password } = req.body;
    console.log(email,password);
    const { error } = siginShema.validate(req.body,{ abortEarly: false });
=======
    const { email, passWord } = req.body;
    const { error } = siginShema.validate(req.body, { abortEarly: false });
>>>>>>> 82d41da323c95692f2902147c40db812bfda5ce9
    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        message: "Email không tồn tại",
      });
    }
    const isMathpassWord = await bcrypt.compare(password, user.passWord);
    if (!isMathpassWord) {
      return res.status(400).json({
        message: "Mật khẩu không chính xác",
      });
    }
    const accessToken = await jwt.sign({ _id: user._id }, process.env.KEY, {
      expiresIn: "1d",
    });
    return res.status(201).json({
      message: "Đăng nhập thành công",
      accessToken,
<<<<<<< HEAD
      user
=======
      user,
>>>>>>> 82d41da323c95692f2902147c40db812bfda5ce9
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

