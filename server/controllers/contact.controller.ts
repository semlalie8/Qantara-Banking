import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';

export const submitContact = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const contactMessage = await prisma.contactMessage.create({
      data: { name, email, subject, message }
    });
    
    res.status(201).json({ success: true, data: contactMessage });
  } catch (error: any) {
    console.error('Submit contact error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json({ success: true, data: messages });
  } catch (error: any) {
    console.error('Get messages error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const updateMessageStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const message = await prisma.contactMessage.update({
      where: { id },
      data: { status }
    });
    
    res.status(200).json({ success: true, data: message });
  } catch (error: any) {
    console.error('Update status error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const replyMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;
    
    // Simulate sending email by logging
    console.log(`Sending email reply to message ${id}...`);
    console.log(`Reply content: ${reply}`);

    const message = await prisma.contactMessage.update({
      where: { id },
      data: { 
        adminReply: reply,
        status: 'REPLIED'
      }
    });
    
    res.status(200).json({ success: true, data: message });
  } catch (error: any) {
    console.error('Reply error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
