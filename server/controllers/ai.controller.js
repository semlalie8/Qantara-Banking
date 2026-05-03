const AIService = require('../services/ai.service');
const prisma = require('../utils/prisma');

const chat = async (req, res) => {
  try {
    const { message, model } = req.body;
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAnalysis = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { accounts: { include: { transactions: true } } }
    });

    const analysis = await AIService.analyzeRisk(user);
    res.json({ analysis });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { chat, getAnalysis };
