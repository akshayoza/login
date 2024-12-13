import express from "express";
//const express = require("express")
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB",{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(() => console.log("connected successfuly"))

.catch((err) => console.error(err));


//create user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

//create model
const User = new mongoose.model("User",userSchema)




//routes

// app.post ("/login",(req,res) =>
// {
//   const { email ,password} = req.body
//   User.findOne({email:email},(err,user)=>
//   {
//     if(user)
//     {
//       if(password === user.password)
//       {
//         res.send({message: "Login successfull",user:user})
//       }
//       else
//       {
//         res.send({message:"Password didn't match"})
//       }
//     }
//     else
//     {
//       res.send({message:"User not registered"})
//     }
//   })
// })


app.post("/login", async (req, res) => {
  // const { email, password } = req.body;
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) 
    {
  
      console.log("password", password);
      console.log("existingUser.password", existingUser.password);
      if (password.trim() === existingUser.password.trim()) 
      {
        res.json({ message: "Login successful", existingUser });
      } else 
      {
        res.json({ message: "Password didn't match" });
      }
    }
    else 
    {
      res.json({ message: "User Not registered" });
    }
  } catch (error) 
  {
    console.error("Error during login:", error);
    res.json({ error: "Internal Server Error" });
  }
});

// app.post("/login",async (req,res)=>
// {
//   const { email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       if(password === existingUser.password)
//       {
//         res.send({ message: "Login successfull" ,existingUser:User});
//       }
//       else
//       {
//         res.send({message:"Password didn't match"})
//       }
//     }
//     else
//     {
//       req.send({message:"User Not registered"});
//     }
//   } catch (error) {
//     console.error("Error during registration:", error);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });


app.post("/register", async (req, res) => {

  // console.log(req.body);
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email:email });

    if (existingUser) {
      res.send({ message: "User already registered" });
    } else {
      const newUser = new User({
        name,
        email,
        password
      });

      await newUser.save(); //save function save data
      res.send({ message: "Successfully Registered, please login now" });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// app.post("/register", (req,res)=>
// {
//     // console.log(req.body)
//     const { name, email, password } =req.body
    
//     //check data is already existes
//     User.findOne({email:email},(err,user)=>{
//       if(user)
//       {
//         res.send({message:"User already registerd"})
//       }
//       else
//       {
//         const user = new User({
//         name,
//         email,
//         password
//       }) 
//       user.save(err => {
//         if(err) 
//         {
//           res.send(err)
//         }
//         else 
//         {
//           res.send({ message: "Sucessfully Registered"})
//         }
//       })
//     }
//   });
// })


app.listen(9002, () =>
{
    console.log("BE started at port 9002")
});

