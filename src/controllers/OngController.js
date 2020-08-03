const generateUniqueId = require("../utils/generateUniqueId");
const connection = require("../database/connection");
const Email = require("../utils/SendEmail");

const nodemailer = require("nodemailer");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueId();

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    const sendEmail = Email();

    return response.json({ id });
  },
};
