import { type Request, type Response } from 'express';
import Subsequence from '../models/Subsequence';
import { getOriginalSequence } from '../services/getOriginalSequence';
import { getSubsequences } from '../services/getSubsequences';
import { validateSequence } from './validators/validateSequence';

export const postOrderHistory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { sequence }: { sequence: number[] } = req.body;

  const validationError = validateSequence(sequence);
  if (validationError) {
    res.status(400).json({ message: validationError });
    return;
  }

  try {
    const subsequences = getSubsequences(sequence);
    const newSubsequence = new Subsequence({ subsequences });

    await newSubsequence.save();
    res.json({ newSubsequence });
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ message: 'Error saving order sequence' });
  }
};

export const getRecommendations = async (req: Request, res: Response): Promise<void> => {
  try {
    const recommendations = await Subsequence.find({})
      .select('-_id -__v -createdAt')
      .sort({ createdAt: -1 })
      .limit(10);

    const transformedRecommendations = recommendations.map(recommendations => ({
      sequence: getOriginalSequence(recommendations.subsequences),
      ...recommendations.toObject()
    }));

    res.json(transformedRecommendations);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ message: 'Error fetching recommendations' });
  }
};
