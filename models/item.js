
//The Mongoose Schema constructor

var mongoose = require('mongoose');
//  product schema
var productSchema = new mongoose.Schema({ 
    
  perfumCategory:{ 
     type:String,
       enum: ['MALE', 'FEMALE']
    },
    name: String,
    price: Number

  
});

module.exports = mongoose.model('Item', productSchema );