import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

router.post('/auth', authController.generateToken);

export default router;
