import Cateblog from "../Model/cateblog.js";


export const create = async (req, res) => {
  try {
    const cate = await Cateblog.create(req.body);
    if (!cate) {
      return res.status(401).json({
        message: "Thêm thất bại",
      });
    }
    return res.status(200).json({
      message: "Thêm thành công",
      cate,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const cates = await Cateblog.find();
    if (cates.lenght == 0) {
      return res.status(401).json({
        message: "Không tìm thấy danh mục nào",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      cates,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const cate = Cateblog.findOne({ _id: req.params.id });
    if (!cate) {
      return res.status(401).json({
        message: "Không tìm thấy danh mục nào",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      cate,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const cateblogRemove = async (req, res) => {
  try {
    const cate = Cateblog.findOneAndDelete({ _id: req.params.id });
    if (!cate) {
      return res.status(401).json({
        message: "Xóa thất bại",
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

export const update = async (req, res) => {
  try {
    const cate = Cateblog.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!cate) {
      return res.status(401).json({
        message: "Cập nhật thất bại",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      cate,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
