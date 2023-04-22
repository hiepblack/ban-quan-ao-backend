import Order from "../Model/order.js";
import orderSchema from "../validate/order.js";
import nodemailer from "nodemailer";
import Mailgen from "mailgen";

export const create = async (req, res) => {
  try {
    console.log(req.body);
    const { error } = orderSchema.validate(req.body);
    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(401).json({
        message: errors,
      });
    }
    const order = await Order.create(req.body);
    const ordered = await Order.findById(order._id).populate("oderdetailId");
    //tạo gia tri cho table mail
    const dataOrder = ordered.oderdetailId.list.map(items => {
      return {
        item: items.nameProduct,
        quantity: items.quantity,
        size: items.size,
        price: items.price,
        totalPrice: items.quantity * items.price
      }
    })
    // send email
    let config = {
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    };
    let transporter = nodemailer.createTransport(config);

    let MailGener = new Mailgen({
      theme: "default",
      product: {
        name: "HaHiep",
        link: "https://www.facebook.com/Hiep1997az/",
      },
    });
    let response = {
      body: {
        name: ordered.username,
        intro: "Hoá đơn của bạn",
        table: {
          data: dataOrder
        },
        outro: "Tổng số tiền cần thanh toán: " + ordered.totalAmount,
      },
    };

    let mail = MailGener.generate(response);
    let message = {
      from: process.env.EMAIL,
      to: ordered.email,
      subject: "Hoá đơn chi tiết",
      html: mail,
    };
    transporter
      .sendMail(message)
      .then(() => {
        return res.status(200).json({
          message: "Thêm thành công",
          success: true,
          ordered,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          error,
        });
      });
    // hết phần hoá đơn
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const order = await Order.find().populate('oderdetailId');
    if (order.length == 0) {
      return res.status(400).json({
        message: "Không tìm thấy ",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id }).populate(
      "orderdetails"
    );
    if (!order) {
      return res.status(400).json({
        message: "Không tìm thấy ",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const update = async (req, res) => {
  try {
    const { error } = await orderSchema.validate(req.body);
    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(401).json({
        message: errors,
      });
    }
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!order) {
      return res.status(400).json({
        message: "Không tìm thấy ",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
