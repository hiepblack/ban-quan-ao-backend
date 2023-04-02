import Order from "../Model/order.js";


export const create = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    if (!order) {
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
    const order = await Order.find();
    if (order.length == 0) {
      return res.status(400).json({
        message: "Không tìm thấy ",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id }).populate(
      "orderdetails"
    );
    if (!order) {
      return res.status(400).json({
        message: "Không tìm thấy ",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const update = async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!order) {
      return res.status(400).json({
        message: "Không tìm thấy ",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
