import { type Request, type Response } from 'express';
import Subsequence from '../models/Subsequence';

export const getOrderHistory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { sequence } = req.query;

  if (typeof sequence === 'string') {
    try {
      const subsequences = sequence.split('_');
      const newSubsequence = new Subsequence({ subsequences });
      await newSubsequence.save();
      res.json({ message: 'Order history saved', subsequences });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving order sequence');
    }
  } else {
    res.status(400).send('Sequence parameter is required');
  }
};

export const getRecommendations = (req: Request, res: Response): void => {
  res.json({ message: 'Recommendations' });
};
