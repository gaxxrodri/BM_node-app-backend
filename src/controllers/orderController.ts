import { type Request, type Response } from 'express';
import Subsequence from '../models/Subsequence';

export const postOrderHistory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { sequence } = req.body;

  if (typeof sequence === 'string') {
    try {
      // convert "1_2_3" into  [[1, 2, 3]]
      // TODO add logic to generate subsequences from sequence
      const subsequences = [
        sequence.split('_').map((num) => parseInt(num, 10)),
      ];
      const newSubsequence = new Subsequence({ subsequences });
      console.log('newSubsequence', newSubsequence);
      await newSubsequence.save();
      res.json({ message: 'Order history saved321', subsequences });
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
