import express from 'express';
import * as orderController from '../controllers/orderController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/history', authMiddleware, orderController.postOrderHistory);
router.get('/recommendations', authMiddleware, orderController.getRecommendations);

export default router;
