const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const user = await connection("user").select("*");

    return response.json(ongs);
  },

  async create(request, response) {
    const { email, password } = request.body;

    await connection("user").insert({
      email,
      password,
    });

    return response.json({ id });
  },
};
