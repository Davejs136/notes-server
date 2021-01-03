import jwt from 'jsonwebtoken';
import type { Request, Response, NextFunction } from 'express';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers['x-access-token'] as string;

  if (!token)
    return res.status(400).json({
      auth: false,
      message: 'No token provided',
    });

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY) as Notes.Auth.Decoded;
  req.userId = decoded.id;
  next();
};
