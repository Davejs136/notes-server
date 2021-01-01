import joi from 'joi';
import type { UserBody } from '../interfaces';

interface UserLogin {
  username: string;
  email: string;
  password: string;
}

export const registerValidation = (data: UserBody) => {
  const userSchema = joi
    .object({
      firstname: joi.string().alphanum().min(3).max(30).required(),
      lastname: joi.string().alphanum().min(3).max(30),
      username: joi.string().required(),
      email: joi.string().trim().required(),
      password: joi.string().min(6).required(),
      repeatPassword: joi.ref('password'),
    })
    .with('password', 'repeatPassword');
  return userSchema.validate(data);
};

export const loginValidation = (data: UserLogin) => {
  const userSchema = joi
    .object({
      username: joi.string(),
      email: joi.string().trim(),
      password: joi.string().min(6).required(),
    })
    .xor('username', 'email');
  return userSchema.validate(data);
};
