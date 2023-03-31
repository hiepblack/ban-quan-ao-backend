import joi from "joi";
const cateproductShema = joi.object({
  nameCategory: joi.string().required().messages({
    "String.any": "Bắt buộc",
  }),
});
export default cateproductShema;
