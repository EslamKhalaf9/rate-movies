import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User, { vaidateLogin } from '../models/User.js';

//@desc POST Login user
//@route POST /api/user/login
//@access Public
export const postLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  await vaidateLogin({ email, password });

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    res.json({
      username: user.username,
      email: user.email,
      token,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//@desc POST Register user
//@route POST /api/user/register
//@access Public
export const postregister = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(409);
    throw new Error('This user already exists');
  }

  const user = new User({ username, email, password });
  console.log(user);
  await user.validateRegister();

  await user.save();
  //todo Generate JWT Token

  res.status(201).json({
    username: user.username,
    email: user.email,
    token,
  });
});
