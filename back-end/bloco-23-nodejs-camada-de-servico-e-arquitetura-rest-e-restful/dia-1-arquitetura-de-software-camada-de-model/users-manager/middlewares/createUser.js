const Joi = require('joi');
const rescue = require('express-rescue');
const UserModel = require('../models/User');

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().min(6).required()
});

module.exports = [
  (req, res, next) => {
    const { error } = userSchema.validate(req.body);

    if (error) return next(error);

    next();
  },
  rescue(async(req, res, next) => {
    const { firstName, lastname, email, password } = req.body;

    const newUser = await UserModel.create({ firstName, lastName, email, password });

    res.status(201).json(newUser);
  }),
];
