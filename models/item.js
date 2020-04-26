
//The Mongoose Schema constructor

var mongoose = require('mongoose');
//  product schema
var productSchema = new mongoose.Schema({ 
    
  perfumCategory:{ type:String,
       enum: ['MALE', 'FEMALE', 'MAKEUP', 'OFFERS']
    },
    name: String,
    price: Number

  
});
// Export the model
module.exports = mongoose.model('Item', productSchema );