import { Response } from 'express';
import AIService from '../services/ai.service';
import prisma from '../utils/prisma';
import { AuthRequest } from '../middleware/auth';

export const chat = async (req: AuthRequest, res: Response) => {
  try {
    const { message, model } = req.body;
    if (!req.user) return res.status(401).json({ message: 'Not authorized' });
    const userId = req.user.id;

    // Get user context for better advice
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { accounts: true, loans: true }
    });

    const advice = await AIService.generateResponse(
      `User Profile: ${JSON.stringify(user)}\nUser Message: ${message}`,
      model || 'qwen3.5:9b'
    );

    // Save chat messages
    await prisma.chatMessage.createMany({
      data: [
        { userId, role: 'USER', content: message },
        { userId, role: 'ASSISTANT', content: advice, model: model || 'qwen3.5:9b' }
      ]
    });

    res.json({ advice });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAnalysis = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Not authorized' });
    const userId = req.user.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { accounts: { include: { transactions: true } } }
    });

    const analysis = await AIService.analyzeRisk(user);
    res.json({ analysis });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
