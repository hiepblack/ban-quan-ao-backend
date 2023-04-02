import joi from "joi";
const detailSchema = joi.object({
  list: joi.array().required(),
  price: joi.number().required(),
  quantity: joi.number().required(),
  discount: joi.string(),
});
export default detailSchema;
