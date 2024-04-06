import express from 'express';
import * as orderController from '../controllers/orderController';

const router = express.Router();

router.post('/history', orderController.postOrderHistory);
router.get('/recommendations', orderController.getRecommendations);

export default router;
