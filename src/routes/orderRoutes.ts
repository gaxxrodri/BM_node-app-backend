// src/routes/orderRoutes.ts
import express from 'express';
import * as orderController from '../controllers/orderController';

const router = express.Router();

router.get('/history', orderController.getOrderHistory);
router.get('/recommendations', orderController.getRecommendations);

export default router;
