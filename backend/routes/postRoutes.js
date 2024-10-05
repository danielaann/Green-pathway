const express = require('express');
const { createPost, getPosts, getPostById } = require('../controller/postController');
const multer = require('multer');
const router = express.Router();

const uploadMiddleware = multer({ dest: 'uploads/' });

router.post('/', uploadMiddleware.single('file'), createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);

module.exports = router;