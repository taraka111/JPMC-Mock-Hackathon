const User = require("../Models/Client");
const bcrypt = require("bcryptjs");

/* Login using email + password */
const clientLogin = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });

    if (!user) return response.status(404).send("USER NOT FOUND");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return response.status(401).send("INVALID PASSWORD");

    response.json(user); // or you can send a token in real apps
  } catch (e) {
    response.status(500).send(e.message);
  }
};

/* View profile by user ID */
const viewProfile = async (request, response) => {
  try {
    const id = request.params.id;
    const user = await User.findById(id);
    if (!user) return response.status(404).send("USER NOT FOUND");

    response.json(user);
  } catch (e) {
    response.status(500).send(e.message);
  }
};

module.exports = {
  clientLogin,
  viewProfile
};




