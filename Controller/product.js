import productShema from "../validate/product.js";
import Product from "../Model/products.js";

export const getAllproduct = async (req, res) => {
  const {limit=10, page = 1, order = "desc", sort = "nameProduct" } = req.query;
  try {
    const options = {
      limit: limit,
      page: page,
      sort: {
        [sort]: order === "desc" ? 1 : -1,
      },
      populate: ["categoryId", "comments"],
    };
    const products = await Product.paginate({}, options);
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
    const product = await Product.findById(id).populate("comments").populate({
      path: "categoryId",
      select: "nameCategory",
    });
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
    const id = req.params.id;
    const productDelete = await Product.findOneAndDelete({ _id: id });
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

export const updateStatus = async (req, res) => {
  try {
    const id = req.params.id;

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

export const fiterProduct = async (req, res) => {
  try {
    const price = req.query.price;
    const size = req.query.size;
    const category = req.query.category;
    const p1 = price.split(" - ")[0];
    const p2 = price.split(" - ")[1];
    if (size && !price && !category) {
      const product = await Product.find({ size: size });
      return res.status(200).json({
        message: "Đã tìm thấy sản phẩm",
        product,
      });
    }
    if (price && !size && !category) {
      if (p1 == 0) {
        const product = await Product.find({ price: { $lte: p2 } });
        return res.status(200).json({
          message: "Đã tìm thấy sản phẩm",
          product,
        });
      }
      if (p2 == 0) {
        const product = await Product.find({ price: { $gte: p1 } });
        return res.status(200).json({
          message: "Đã tìm thấy sản phẩm",
          product,
        });
      }
      const product = await Product.find({ price: { $gte: p1, $lte: p2 } });
      return res.status(200).json({
        message: "Đã tìm thấy sản phẩm",
        product,
      });
    }
    let query;
    if (size && price) {
      if (p1 == 0) {
        query = { $and: [{ size: size }, { price: { $lte: p2 } }] };
        const product = await Product.find(query);
        return res.status(200).json({
          message: "Đã tìm thấy sản phẩm",
          product,
        });
      }
      if (p2 == 0) {
        query = { $and: [{ size: size }, { price: { $gte: p1 } }] };
        const product = await Product.find(query);
        return res.status(200).json({
          message: "Đã tìm thấy sản phẩm",
          product,
        });
      }
      query = { $and: [{ size: size }, { price: { $gte: p1, $lte: p2 } }] };
      const product = await Product.find(query);
      return res.status(200).json({
        message: "Đã tìm thấy sản phẩm",
        product,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const getAllproductSort = async (req, res) => {
//   try {
//     let query;
//     if (req.query.nameAz) {
//       query = { nameProduct: 1 };
//       console.log("abc");
//     }
//     if (req.query.nameZa) {
//       query = { nameProduct: -1 };
//     }
//     if (req.query.priceAz) {
//       query = { price: 1 };
//     }
//     if (req.query.priceZa) {
//       query = { price: -1 };
//     }
//     const products = await Product.find().sort(query).populate({
//       path: "categoryId",
//       select: "nameCategory",
//     });
//     if (!products) {
//       return res.status(401).json({
//         message: "Không tìm thấy sản phẩm nào",
//       });
//     }
//     return res.status(200).json({
//       message: "Thành công",
//       products,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error,
//     });
//   }
// };
