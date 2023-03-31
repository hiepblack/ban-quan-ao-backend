import Cateproduct from "../Model/cateproduct.js";
import Product from "../Model/product.js";
import cateproductShema from "../validate/cateProduct.js";

export const getAllcate = async (req, res) => {
  try {
    const cates = await Cateproduct.find();
    if (!cates) {
      return res.status(401).json({
        message: "Không tìm thấy danh mục nào",
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

export const getAllproduct = async (req, res) => {
  try {
    const cate = await Cateproduct.findOne({ _id: req.params.id });
    if (!cate) {
      return res.status(401).json({
        message: "Không tìm thấy danh mục nào",
      });
    }
    const products = await Product.find({ categoryId: cate._id });
    if (!products) {
      return res.status(400).json({
        message: "không tìm thấy sản phẩm có danh mục này",
      });
    }
    return res.status(200).json({ ...cate.toObject(), products });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const getOnecate = async (req, res) => {
  try {
    const id = req.params.id;
    const cate = await Cateproduct.findOne({ _id: id });
    if (!cate) {
      return res.status(401).json({
        message: "Không tìm  danh mục",
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

export const addCate = async (req, res) => {
  try {
    const body = req.body;
    const { error } = cateproductShema.validate(body);
    if (error) {
      const errors = error.detail.map((items) => items.message);
      return res.status(401).json({
        message: errors,
      });
    }
    const cate = await Cateproduct.create(body);
    if (!cate) {
      return res.status(401).json({
        message: "Thêm thất bại",
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

export const cateUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const { error } = cateproductShema.validate(body);
    if (error) {
      const errors = error.detail.map((items) => items.message);
      return res.status(401).json({
        message: errors,
      });
    }
    const cateupdated = await Cateproduct.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });
    if (!cateupdated) {
      return res.status(401).json({
        message: "Cập nhật thất bại",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      cateupdated,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
