const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://danielaannpereira:scott1811@projects.u5ffu.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("User",userSchema)

module.exports=collection