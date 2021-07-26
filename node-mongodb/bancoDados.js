const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Login =  new Schema({

   User:{
      type:String
       
      
   },
   password:{
      type:String
       
   }
 
},
{
   timestamps:true, 
});

module.exports = mongoose.model('Login',Login);
