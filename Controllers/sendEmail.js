const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send-email', async (req, res) => {
  const { email, ngo } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'muditk441@gmail.com',
        pass: "ojzkxugrnalysety",
    },
  });

  let mailOptions = {
    from: 'muditk441@gmail.com',
    to: email,
    subject: 'NGO Request Sent',
    text: `Your request has been sent to ${ngo.name}.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
