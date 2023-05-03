import Blog from "../Model/blog.js";

export const getAll = async (req, res) => {
  const { page = 1, limit = 6 , order = "desc", sort = "createdAt"} = req.query;
  try {
    const options ={
      limit: limit,
      page: page,
      sort:{
        [sort]: order === 'desc' ?1 :-1,
      },
      populate:"cateBlogId"
    }
    const blogs = await Blog.paginate({}, options)
    if (!blogs) {
      return res.status(401).json({
        message: "Không tìm thấy bài viết nào",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate({
      path: "cateBlogId",
      select: "namecateBlog",
    });
    if (!blog) {
      return res.status(401).json({
        message: "Không tìm thấy bài viết nào",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const create = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    if (!blog) {
      return res.status(401).json({
        message: "Thêm thất bại",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const blogRemove = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(401).json({
        message: "Xóa thất bại",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blog) {
      return res.status(401).json({
        message: "Cập nhật thất bại",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
