import Orderdetails from "../Model/orderdetails.js";

export const create = async (req, res) => {
  try {
    const detail = await Orderdetails.create(req.body);
    if (!detail) {
      return res.status(400).json({
        message: "Thêm đơn hàng thất bại",
      });
    }
    return res.status(200).json({
      message: "Thêm thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const detail = await Orderdetails.find(req.body);
    if (detail.length == 0) {
      return res.status(400).json({
        message: "Không có đơn hàng nào",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      detail,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const detail = await Orderdetails.findOne({ _id: req.params.id });
    if (!detail) {
      return res.status(400).json({
        message: "Không có đơn hàng nào",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      detail,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const update = async (req, res) => {
  try {
    const detail = await Orderdetails.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!detail) {
      return res.status(400).json({
        message: "Cập nhật thất bại",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      detail,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
