const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1.) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }

    // Active in gmail "less secure app" option
  });
  // 2.) Define the mail options
  const mailOptions = {
    from: 'Panji setyo kurniawan <admin@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  // 3.) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;