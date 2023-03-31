import Joi from "joi";
const productShema = Joi.object({
  nameProduct: Joi.string().required().messages({
    "String.empty": "không được bỏ trống tên sản phẩm",
    "String.any": "Trường hợp bắt buộc",
  }),
  quantity: Joi.number().required().messages({
    "String.empty": "không được bỏ trống tên sản phẩm",
    "String.any": "Trường hợp bắt buộc",
  }),
  imgProduct: Joi.array().required().messages({}),
  categoryId: Joi.string().required(),
  size: Joi.array().required(),
  colors: Joi.array().required(),
  description: Joi.string().required(),
});
export default productShema;
