import User from "../Model/User.js";
import { sigupShema } from "../validate/user.js";
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
    const user = await User.findOne({ _id: req.params.id });
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
    const userdelete = await User.findOneAndRemove({ _id: req.params.id });
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

export const userUpdate = async (req, res) => {
  try {
    const { error } = sigupShema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((items) => items.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const userupdated = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!userupdated) {
      return res.status(401).json({
        message: "Cập nhật thất bại",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      userupdated,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
