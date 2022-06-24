const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = [
  (req, res, next) => {
    const { error } = UserModel.isValid(req.body);

    if (error) return next(error);

    next();
  },
  rescue(async(req, res, ) => {
    const { firstName, lastName, email, password } = req.body;

    const newUser = await UserModel.create({ firstName, lastName, email, password });


    res.status(201).json(newUser);
	}),
];
