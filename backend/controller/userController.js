const User = require('../models/User');

// Handle user login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.json("exists");
    } else {
      res.json("notexists");
    }
  } catch (error) {
    res.json("notexists");
  }
};

// Handle user registration
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password };

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.json("exists");
    } else {
      await User.create(newUser);
      res.json("registered");
    }
  } catch (error) {
    res.json("notexists");
  }
};

//making new user
// exports.register = async (req,res)=>{
//     const{name,email,password}=req.body

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
// }