// const mongoose=require("mongoose")
// mongoose.connect("mongodb+srv://danielaannpereira:scott1811@projects.u5ffu.mongodb.net/")
// .then(()=>{
//     console.log("mongodb connected");
// })
// .catch(()=>{
//     console.log('failed');
// })


// const userSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// const collection = mongoose.model("User",userSchema)

// module.exports=collection

// const PostSchema = new mongoose.Schema({
//     title: String,
//     summary:String,
//     content: String,
//     cover:String,
//     author:String,
// },{
//     timestamps:true,
// })

// const PostModel = mongoose.model('Post',PostSchema)
// module.exports = PostModel;