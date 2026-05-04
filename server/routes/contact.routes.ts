import { Router } from 'express';
import { submitContact, getMessages, updateMessageStatus, replyMessage } from '../controllers/contact.controller';

const router = Router();

router.post('/', submitContact);
router.get('/', getMessages);
router.patch('/:id/status', updateMessageStatus);
router.post('/:id/reply', replyMessage);

export default router;
