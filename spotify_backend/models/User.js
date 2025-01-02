//making a model to store user info
//we connected node js and mongodb using mongoose hence import those files 
const mongoose=require("mongoose");
//how to create a model
//step 1: require mongoose 
//step 2: create a mongoose schema (structure of a user)
//step 3: create a model

const User= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,

    },
    lastName:{
        type:String,
        required:false,
    },
    email:{
        type: String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    likedSongs:{
        type:String,
        default: "",

    },
    likedPlaylists:{
        type:String,
        default:"",
    },
    subscribedArtists:{
        type:String,
        default:"",

    },



});
//mongoose.schema() keeps info on what the scheme will look like
const UserModel= mongoose.mode1("User",User)
//second parameter: name of schema
//first para: what we want to name collection
//model function handles how we'll actually store schema in db
module.exports= UserModel;
//allows us to use module in another file
