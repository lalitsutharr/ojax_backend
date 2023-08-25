const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('../config');
const s3 = new AWS.S3();


const upload = multer({
  storage: multerS3({
    s3,
    bucket: config.backend14331,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read', 
    key: function (req, file, cb) {
      cb(null, `uploads/${Date.now()}-${file.originalname}`);
    }
  })
});

exports.uploadVideo = upload.single('video'); 