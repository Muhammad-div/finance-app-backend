const nodemailer = require("nodemailer");

// Create a Nodemailer transporter with your email service details
const transporter = nodemailer.createTransport({
  service: "gmail", // e.g., 'Gmail', 'Outlook', 'SMTP'
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "hashirkn11@example.com",
    pass: "?Programmer!1",
  },
});

module.exports = transporter;
