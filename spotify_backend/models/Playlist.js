//making a model to store user info
//we connected node js and mongodb using mongoose hence import those files 
const mongoose=require("mongoose");
//how to create a model
//step 1: require mongoose 
//step 2: create a mongoose schema (structure of a user)
//step 3: create a model

const Playlist= new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    thumbnail:{
        type:String,
        //not an image type because the image url would be of
        //string type 

        required:true,
    },
   
    owner:{
        type: mongoose.Types.ObjectId,
        ref: "user",


    },
    // 1. which songs are in playlist 
    // 2. who are the collaborators 
    songs: [
        //the square bracket will make mongo understand
        // that we're storing an array
        {
        type: mongoose.Types.ObjectId ,
        ref:"song",
        // we only want to store the songs not thumbnail or anything
       },],

    collaborators: [
        {
            type: mongoose.Types.ObjectId,
            ref: "user",
        }
    ]   



});
//mongoose.schema() keeps info on what the scheme will look like
const PlaylistModel= mongoose.mode1("Playlist",Playlist)
//second parameter: name of schema
//first para: what we want to name collection
//model function handles how we'll actually store schema in db
module.exports= PlaylistModel;
//allows us to use module in another file
