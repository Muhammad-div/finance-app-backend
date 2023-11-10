const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "your_email_service", // e.g., 'Gmail', 'Outlook', 'SMTP'
  auth: {
    user: "your_email@example.com",
    pass: "your_email_password",
  },
});

// Function to send an email confirmation
exports.sendConfirmationEmail = (recipientEmail) => {
  const mailOptions = {
    from: "your_email@example.com",
    to: recipientEmail,
    subject: "Email Confirmation",
    text: "Please confirm your email by clicking the link...",
    // You can include an HTML version of the email as well if needed
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
