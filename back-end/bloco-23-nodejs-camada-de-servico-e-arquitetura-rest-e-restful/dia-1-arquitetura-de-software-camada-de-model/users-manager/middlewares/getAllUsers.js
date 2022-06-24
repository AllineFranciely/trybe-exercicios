const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = rescue(async (_req, res) => {
  const allUsers = await UserModel.findAll();
  res.status(200).json(allUsers);
});