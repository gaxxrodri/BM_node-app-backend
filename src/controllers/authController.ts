import { type Request, type Response } from 'express';
import jwt from 'jsonwebtoken';

export const generateToken = (req: Request, res: Response): void => {
  try {
    const token = jwt.sign({}, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error('Error in authentication:', error);
    res.status(500).json({ message: 'Internal server error generating token' });
  }
};
