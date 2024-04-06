import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const generateToken = (req: Request, res: Response) => {
  const token = jwt.sign({}, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRATION });
  res.json({ token });
};