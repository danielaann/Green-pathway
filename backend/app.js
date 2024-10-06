const express = require("express")
const collection = require("./mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extented: true}))
app.use(cors())
const multer = require ('multer')
const uploadMiddleware = multer({dest:'upload/'})
const fs = require('fs')
const Post = require('./mongoose')
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');


connectDB();

app.use('/uploads',express.static('uploads'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);


// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});


