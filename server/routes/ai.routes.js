const express = require('express');
const { chat, getAnalysis } = require('../controllers/ai.controller');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/chat', auth, chat);
router.get('/analysis', auth, getAnalysis);

module.exports = router;
