import { type Request, type Response } from 'express';
import Subsequence from '../models/Subsequence';
import { getOriginalSequence } from '../services/getOriginalSequence';
import { getSubsequences } from '../services/getSubsequences';

export const postOrderHistory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { sequence } = req.body;

  if (typeof sequence === 'object' && sequence.length > 0) {
    try {
      const subsequences = getSubsequences(sequence);
      const newSubsequence = new Subsequence({ subsequences });

      await newSubsequence.save();
      res.json({ message: 'Order history saved', newSubsequence });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving order sequence');
    }
  } else {
    res.status(400).send('Sequence parameter is required');
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
      ...recommendations.toObject(),
    }));

    res.json(transformedRecommendations);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).send('Error fetching recommendations');
  }
};
