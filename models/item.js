
//The Mongoose Schema constructor

var mongoose = require('mongoose');
//  product schema
var productSchema  = new mongoose.Schema({ 
  //  category:{
    //    type:String,
      //  enum: []
    //},
    //name: String,
    //price: Number

  email: { type: String, unique: true, lowercase: true},
  password: String,
  username: String,
  gender: { 
  type: String,
   enum: ['MALE', 'FEMALE']
   },
   phone: Number 
});

module.exports = mongoose.model('Item', ProductSchema );