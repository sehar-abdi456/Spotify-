// all authentication routes such as log in sign up
const express = require("express");
const router= express.Router();
// we only want things specific to routing from express
const User= require("../models/User");
const bcrypt= require("bcrypt");
const {getToken}= require("../utils/helpers");
//this POST route will help u register a user
router.post("/register",async (req,res)=>{
     //this code is run when the /register api is called as a POST request
// assume my req.body will be of format:
// {email, password,firstName, lastName,username}
const{email,password,firstName,lastName,username}=req.body;

// step 2: check if user with this email already exists then throw error
const user= await User.findOne({email:email});
if(user){
     return res
     .status(403)
     .json({error:"a user with this mail exists"})
//   1.   res.status(403):
// Sets the HTTP status code of the response to 403 Forbidden.
// This status code indicates that the server understands the request, but the action is not allowed.
//    2.   res.json({ error: "A user with this email exists" }):
// Sends a JSON response containing an object with an error property.
// This object provides a clear message ("A user with this email exists") explaining why the request was rejected.
// json is not an object its a data format
// JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange data between systems, particularly between a client and a server
}

//if user not found then its a valid request
// step 3: create a new user in db
// step 3.1 : we dont store passwords in text
// we convert plain text to hash, if db gets hacked our users passwords will be out
const hashPassword= bcrypt.hash(password,10);

const newUserData={email,
     password: hashPassword,
     firstName, 
     lastName,
     userName};
const newUser= await User.create(newUserData);

//step 4 
// when a user creates an account i want to assign a unique token to the user 

const token= await getToken(email, newUser);
// step 5 return result 
const userToReturn={...newUser.toJSON(),token};
delete userToReturn.password;
return res.status(200).json(userToReturn);
//returned to client from server 




});
