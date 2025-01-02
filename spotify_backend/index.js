//step 1- npm init : package.json- this is a node project 
// npm i express :expressjs package installed -- project came to know we're using express

// we use express
const express= require("express");
const mongoose= require("mongoose");

require("dotenv").config();
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const passport= require("passport");
const User=require("./models/User")

const app= express();
const port=8000;
//using the above two lines we have our entire express paxckage 
//connect mongodb to node 



mongoose.connect("mongodb+srv://sehartech4561:"+ process.env.MONGO_PASSWORD+
"@cluster0.birzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
{
    // useNewUrlParser:true,
    // useUnifiedTopology: true,

})
.then((x)=>{
    console.log("connected to mongo");
})
.catch((err)=>{
    console.log("couldnt connect");


});
//above takes 2 arguments: 1. which db to connect(db urL)
//2. connection options 


// fRsaOjC2UaBz4BKx password for my cluster

//the code given below is to set up passport-jwt
// jwt means JSON web token, which means it will encrypt authentication info, while passing from frontend to back
//passport jwt is a package used for authentication


let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'hahahah';
// the above 2 jwtfromrequset and secretorkey are compulsory to include 

//secret key using which we can do encryption and decryption


passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        //note we have to import passport and User because we're using them 
        // port.use and User.findOne
        //findone is a function predefined inside a model
        
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));





// CREATING AN API to return text 
app.get("/",(req,res)=>{
    //req contains all data for request 
    //res contains data for response 
    //"/" is the route 
    res.send("hello world");
});
//now we want to tell express that we'll run server on port 5000
app.listen(port,()=>{
    console.log("app is running on port"+ port);

});

//mongoose is a package which links node js and mongodb
// mongoose- ODM library for mongodb and node.js 
//provides a way to interact with mongodb using javascript 
//SCHEMAS?
// blueprint or a structure that defines the shape of data 
//in a database, schemas help organize and validate the structure of documents 

