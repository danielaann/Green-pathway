const express = require("express")
const collection = require("./mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extented: true}))
app.use(cors())


//for Login
app.get("/",cors(),(req,res)=>{

})

app.post("/login", async (req,res)=>{
    const{email,password}=req.body;

    try{
        // check if email is same
        const check=await collection.findOne({email:email})
        if (check){
            res.json("exists")
        }
        else{
            res.json("notexists")
        }

    }catch(e){
        res.json("notexists")
    }
})

//for Register

app.post("/register",async (req,res)=>{
    const{name,email,password}=req.body

    //making new user
    const data={
        name:name,
        email:email,
        password:password
    }

    try{
        // check if email is same
        const check=await collection.findOne({email:email})
        if (check){
            res.json("exists")
        }
        else{
            res.json("notexists")
            await collection.insertMany([data])
        }

    }catch(e){
        res.json("notexists")
    }
})

app.listen(3000,()=>{
    console.log('Port connecvted');
})