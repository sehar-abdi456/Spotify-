// create common functions in this file
const jwt= require("jwt");


exports={}
// This initializes an empty object assigned to exports. It will be used to attach functions or properties to be exported.

//below: Here you're adding a method getToken to the exports object. This function could be designed to perform any logic, like fetching a token
exports.getToken=async (email,user)=>{
    const token= jwt.sign({identifier: user._id})
    return token;



};
module.exports= exports
//This line exports the exports object.