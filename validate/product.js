import Joi from "joi";
const productShema = Joi.object({
  nameProduct: Joi.string().required().messages({
    "String.empty": "không được bỏ trống tên sản phẩm",
    "String.any": "Trường hợp bắt buộc",
  }),
  price:Joi.number().required().messages({
    "Number.empty": "không được bỏ trống số lượng sản phẩm",
    "String.any": "Trường hợp bắt buộc",
  }),
  quantity: Joi.number().required().messages({
    "Number.empty": "không được bỏ trống số lượng sản phẩm",
    "String.any": "Trường hợp bắt buộc",
  }),
  brand:Joi.string().required(),
  imgProduct: Joi.array().required().messages({}),
  categoryId: Joi.string().required(),
  size: Joi.array().required(),
  colors: Joi.array().required(),
  description: Joi.string().required(),
});
export default productShema;
