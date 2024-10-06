const Post = require('../models/Post');
const fs = require('fs');

// Create a new post with file upload
exports.createPost = async (req, res) => {
  console.log('Body:',req.body);
  const { originalname, path } = req.file;
  const newFilePath = `${path}.${originalname.split('.').pop()}`;
  fs.renameSync(path, newFilePath);

  const { title, summary, content, author } = req.body;
  try {
    const newPost = await Post.create({
      title,
      summary,
      content,
      cover: newFilePath,
      author,
    });
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(10);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post' });
  }
};