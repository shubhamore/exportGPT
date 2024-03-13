const express = require('express');
const router = express.Router();

const { getConversation,test } = require('../controllers/mainController');

router.get('/getConversation',getConversation)
router.get('/test', test)

module.exports = router;
