// Enviar email de Boas Vindas

const Email = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  transporter.sendMail({
    from: process.env.USER,
    to: email,
    replyTo: email,
    subject: `Seja bem vindo ${name} !`,
    html5: <h1>Olá</h1>,
  });
};
export default Email;
