import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export const sendEmail = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "Mail.ru",
      port: 587,
      secure: false,
      auth: {
        user: process.env.HOTMAIL_USERNAME,
        pass: process.env.HOTMAIL_PASSWORD,
      },
    });
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    let info = await transporter.sendMail({
      from: `${process.env.HOTMAIL_USERNAME}>`,
      to: "ziadshimy7@gmail.com",
      subject: "Website feedback",
      html: `<b>${req.body.message}
      from ${req.body.userEmail}</b>`,
    });
    console.log(info);
    if (info) res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(404).json({ message: error.response });
  }
};
