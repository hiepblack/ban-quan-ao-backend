import joi from "joi";
export const sigupShema = joi.object({
  userName: joi.string().required().messages({
    "String.empty": "Tên không được bỏ trống",
    "any.required": "Trường hợp này bắt buộc",
  }),
  email: joi.string().required().email().messages({
    "String.empty": "Email không được bỏ trống",
    "any.required": "Trường hợp này bắt buộc",
    "String.email": "Email không đúng định dạng",
  }),
  passWord: joi.string().required().min(3).messages({
    "String.empty": "mật khẩu không được bỏ trống",
    "any.required": "Trường hợp này bắt buộc",
    "string.min": "mật khẩu ít nhất {#limit} kí tự",
  }),
  confirmpassWord: joi.string().required().valid(joi.ref("passWord")).messages({
    "String.empty": "mật khẩu không được bỏ trống",
    "any.required": "Trường hợp này bắt buộc",
    "any.only": "Mật khẩu không khớp",
  }),
  image: joi.string(),
});
export const siginShema = joi.object({
  email: joi.string().required().email().messages({
    "String.empty": "Email không được bỏ trống",
    "any.required": "Trường hợp này bắt buộc",
    "String.email": "Email không đúng định dạng",
  }),
  passWord: joi.string().required().min(3).messages({
    "String.empty": "mật khẩu không được bỏ trống",
    "any.required": "Trường hợp này bắt buộc",
    "string.min": "mật khẩu ít nhất {#limit} kí tự",
  }),
});
