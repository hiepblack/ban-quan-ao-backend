import Product from "../Model/product.js";
import productShema from "../validate/product.js";

export const getAllproduct = async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    if (!products) {
      return res.status(401).json({
        message: "Không tìm thấy sản phẩm nào",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const getOneproduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id).populate("categoryId");
    // console.log(product);
    // return;
    if (!product) {
      return res.status(401).json({
        message: "Không tìm thấy sản phẩm nào",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const productAdd = async (req, res) => {
  console.log(req.body);
  try {
    const { error } = productShema.validate(req.body);
    if (error) {
      const errors = error.details.map((items) => items.message);
      return res.status(401).json({
        message: errors,
      });
    }
    const newProduct = await Product.create(req.body);
    if (!newProduct) {
      return res.status(400).json({
        message: "Thêm sản phẩm thất bại",
      });
    }
    return res.status(200).json({
      message: "Thêm sản phẩm thành công",
      newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const productRemove = async (req, res) => {
  try {
    const id = req.param.id;
    const productDelete = await Product.findByIdAndDelete({ id });
    if (!productDelete) {
      return res.status(401).json({
        message: "Xóa sản phẩm thất bại",
      });
    }
    return res.status(200).json({
      message: "Xóa sản phẩm thành công",
      productDelete,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const productupdate = async (req, res) => {
  try {
    const id = req.params.id;
    const { error } = productShema.validate(req.body);
    if (error) {
      const errors = error.details.map((items) => items.message);
      return res.status(401).json({
        message: errors,
      });
    }
    const productUpdated = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    if (!productUpdated) {
      return res.status(400).json({
        message: "Cập nhật thất bại",
      });
    }
    return res.status(200).json({
      message: "Cập nhật thành công",
      productUpdated,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const getOnecate = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ categoryId: id });
    if (!product) {
      return res.status(401).json({
        message: "Không tìm thấy sản phẩm nào",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
