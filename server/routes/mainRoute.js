const express = require('express');
const router = express.Router();

const { getConversation } = require('../controllers/mainController');

router.get('/getConversation',getConversation)

module.exports = router;
