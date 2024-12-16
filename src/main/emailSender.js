const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, body) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-app-password",
    },
  });

  let info = await transporter.sendMail({
    from: '"Workspace Project" <your-email@gmail.com>',
    to,
    subject,
    text: body,
  });

  console.log("Email sent: %s", info.messageId);
};

module.exports = { sendEmail };
