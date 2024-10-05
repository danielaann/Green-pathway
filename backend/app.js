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

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

//for Login
// app.get("/",cors(),(req,res)=>{

// })

// app.post("/login", async (req,res)=>{
//     const{email,password}=req.body;

//     try{
//         // check if email is same
//         const check=await collection.findOne({email:email})
//         if (check){
//             res.json("exists")
//         }
//         else{
//             res.json("notexists")
//         }

//     }catch(e){
//         res.json("notexists")
//     }
// })

// //for Register

// app.post("/register",async (req,res)=>{
//     const{name,email,password}=req.body

//     //making new user
//     const data={
//         name:name,
//         email:email,
//         password:password
//     }

//     try{
//         // check if email is same
//         const check=await collection.findOne({email:email})
//         if (check){
//             res.json("exists")
//         }
//         else{
//             res.json("notexists")
//             await collection.insertMany([data])
//         }

//     }catch(e){
//         res.json("notexists")
//     }
// })

// app.post('/post', uploadMiddleware.single('file'),async (req,res)=>{
//     const {originalname} = req.file;
//     const parts = originalname.split('.');
//     const ext = parts[parts.lenght - 1];
//     const newPath = path+'.'+ext;
//     fs.renameSync(path,newPath);

//     const{title,summary,content,author} = req.body;
//     const postDoc = await Post.create({
//         title,
//         summary,
//         content,
//         cover:newPath,
//         author,
//     })

//     res.json(postDoc);


// })

// app.get('/post',async(req,res)=>{
//     const posts = await Post.find().sort({createdAt: -1}).limit(10);
//     res.json(posts);
// })

// app.get('/post/:id', async(req,res)=>{
//     const {id} = req.params
//     const postDoc = await Post.findById({IdleDeadline}).popular('author');
//     res.json(postDoc)
// })

// app.use('/uploads',express.static(__dirname + '/uploads'))

// app.listen(3000,()=>{
//     console.log('Port connecvted');
// })

