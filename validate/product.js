import Joi from "joi";
const productShema = Joi.object({
  nameProduct: Joi.string().required().messages({
    "String.empty": "không được bỏ trống tên sản phẩm",
    "String.any": "Trường hợp bắt buộc",
  }),
  imgProduct: Joi.string().required(),
  description: Joi.string().required(),
});
export default productShema;
