const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const nodemailer =require('nodemailer')
const ZapytaniaZlecenia = require('../models/formularz.model')


router.post('/contact', async (req, res) => {
  const { name, companyName, email, phone, message } = req.body;

  try {
    const newFormularz = new ZapytaniaZlecenia({ name, companyName, email, phone, message });
    await newFormularz.save();
    res.json({ message: 'OK' });

    //  Wysyłanie wiadomości e-mail //
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.example.com', // adres serwera SMTP
    //   port: 465, // port serwera SMTP
    //   secure: true, // użyj SSL
    //   auth: {
    //     user: 'your_email@example.com', // adres e-mail nadawcy
    //     pass: 'your_email_password' // hasło do konta e-mail
    //   }
    // });

    // const mailOptions = {
    //   from: 'your_email@example.com', // adres e-mail nadawcy
    //   to: 'recipient_email@example.com', // adres e-mail odbiorcy
    //   subject: 'Nowa wiadomość z formularza', // temat e-maila
    //   text: `${name} wysłał wiadomość o treści ${message}. Dane kontaktowe: ${companyName} ${phone} ${email}` // treść e-maila
    // };

    // const info = await transporter.sendMail(mailOptions);
    // console.log('E-mail został wysłany: ' + info.response);
    // res.json({ message: 'OK' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Błąd wysyłania wiadomości e-mail' });
  }
});

router.route('/contact').delete((req, res) => { 
  res.send('delete'); 
});

module.exports = router;