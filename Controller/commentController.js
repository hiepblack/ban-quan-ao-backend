import Comment from "../Model/comment_product.js";
import Product from "../Model/products.js";

export const getAllcmt = async (req, res) => {
  try {
    const comments = await Comment.find();
    if (comments.length == 0) {
      return res.status(400).json({
        message: "Không tìm thấy bình luận nào",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      successfull: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const getOnecmt = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(400).json({
        message: "Không tìm thấy bình luận nào",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      successfull: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const addcmt = async (req, res) => {
  const productId = req.params.productId;
  try {
    const comment = await Comment.create(req.body);
    if (!comment) {
      return res.status(400).json({
        message: "Không bình luận ",
      });
    }
    await Product.findByIdAndUpdate(productId, {
      $push: {
        comments: comment._id,
      },
    });
    return res.status(200).json({
      message: "Comment thành công",
      successfull: true,
      comment,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const cmtRemove = async (req, res) => {
  try {
    const commentDeleted = await Comment.findOneAndDelete({
      _id: req.params.id,
    });
    if (!commentDeleted) {
      return res.status(400).json({
        message: "Xóa thất bại",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      successfull: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const cmtUpdate = async (req, res) => {
  try {
    const comment = await Comment.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body
    );
    if (!comment) {
      return res.status(400).json({
        message: "Cập nhật thất bại",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      successfull: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
