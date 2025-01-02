const mongoose=require("mongoose");
//how to create a model
//step 1: require mongoose 
//step 2: create a mongoose schema (structure of a user)
//step 3: create a model

const Song= new mongoose.Schema({
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
    track:{
        type: String,
        //actually will be an audio file but for now we're storing it as 
        //a url

        required:true,
    },
   artist:{
        type: mongoose.Types.ObjectId,
        //objectid has its own type which we can get in the form of
        // mongoose.Types.ObjectId
        ref:"user",
        //ref tells us what type of id it is

        //mongoose gives us an inbuilt way such that if we're storing
        // storing one schema's id on another schema 
         
        required:true,
    },
   



});
//mongoose.schema() keeps info on what the scheme will look like
const SongModel= mongoose.mode1("Song",Song)
//second parameter: name of schema
//first para: what we want to name collection
//model function handles how we'll actually store schema in db
module.exports= SongModel;
//allows us to use module in another file
