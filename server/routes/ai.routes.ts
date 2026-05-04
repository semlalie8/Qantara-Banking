import express from 'express';
import { chat, getAnalysis } from '../controllers/ai.controller';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/chat', auth, chat);
router.get('/analysis', auth, getAnalysis);

export default router;
