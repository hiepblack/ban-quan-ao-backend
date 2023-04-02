import joi from "joi";
const orderSchema = joi.object({
  userId: joi.string().required(),
  oderdetailId: joi.string().required(),
  totalAmount: joi.number().required(),
  address: joi.string().required(),
  phone: joi.string().required(),
  note: joi.string().required(),
  orderstatus: joi.string().required(),
});
export default orderSchema;
