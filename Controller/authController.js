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
    const { email, passWord } = req.body;
    const { error } = siginShema.validate(email, passWord);
    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const user = User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        message: "Email không tồn tại",
      });
    }
    const isMathpassWord = await bcrypt.compare(passWord, user.passWord);
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
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(401).json({
        message: "Không tìm thấy",
      });
    }
    return res.status(200).json({
      message: "Thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.param.id });
    if (!user) {
      return res.status(401).json({
        message: "Không tìm thấy",
      });
    }
    return res.status(200).json({
      message: "Thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const userRemove = async (req, res) => {
  try {
    const userdelete = await User.findOneAndRemove({ _id: req.param.id });
    if (!userdelete) {
      return res.status(401).json({
        message: "Không tìm thấy",
      });
    }
    return res.status(200).json({
      message: "Thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
