import jwt from 'jsonwebtoken';
import { User } from '../models';
import { loginValidation, registerValidation } from '../utils';
import type { Request, Response } from 'express';
import type { UserBody } from '../interfaces';

export const index = (_: Request, res: Response) =>
  res.status(200).json({
    message: 'Authentication route',
  });

export const register = async (req: Request, res: Response) => {
  const { firstname, lastname, username, email, password }: UserBody = req.body;

  const { error } = registerValidation(req.body);

  if (error)
    return res.status(400).json({ status: 400, message: error.message });

  const exists = await User.findOne({ email });

  if (!!exists) {
    return res.status(400).json({
      auth: false,
      token: null,
      message: 'User already exists',
    });
  }

  const user = new User({
    firstname,
    lastname,
    username,
    email,
    password,
  });

  user.password = await user.encryptPassword(user.password);

  await user.save();

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: 60 * 60 * 24,
  });

  res.status(201).json({
    token,
    auth: true,
    message: 'User created successfully',
  });
};

export const me = async (req: Request, res: Response) => {
  const user = await User.findById(req.userId, { password: 0 });

  if (!user)
    return res.status(400).json({ auth: false, message: 'User not found' });

  res.json(user);
};

export const login = async (req: Request, res: Response) => {
  const { email, password, username }: UserBody = req.body;
  let user = null;

  const { error } = loginValidation(req.body);

  if (error)
    return res.status(400).json({
      status: 400,
      message: error.message,
    });

  if (!!email) {
    user = await User.findOne({ email });
  } else {
    user = await User.findOne({ username });
  }

  if (!user)
    return res.status(400).json({
      status: 400,
      auth: false,
      message: 'User not found',
    });

  const validPassword = await user?.comparePassword(password);

  if (!validPassword)
    return res.status(400).json({
      auth: false,
      token: null,
      message: 'Password incorrect',
    });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: 60 * 60 * 24,
  });

  return res.status(200).json({
    auth: true,
    token,
  });
};
