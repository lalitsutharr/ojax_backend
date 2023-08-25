const express = require('express');
const router = express.Router();


const uploadController = require('../controllers/uploadController');
const downloadController = require('../controllers/downloadController');


router.post('/upload', uploadController.uploadVideo);
router.get('/download/:filename', downloadController.downloadVideo);

module.exports = router;
