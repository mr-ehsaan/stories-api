const express = require('express');
const { getTopStories } = require('../controllers/storiesController');

const router = express.Router();
router.get('/top', getTopStories);

module.exports = router;
