import { type Request, type Response } from 'express';
import jwt from 'jsonwebtoken';

export const generateToken = (req: Request, res: Response): void => {
  const token = jwt.sign({}, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRATION });
  res.json({ token });
};
