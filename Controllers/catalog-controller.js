var Item = require('../models/item');
// CRUD CREATE item
exports.createItem = function(req, res) { 
    var newItem = new Item(req.body);
    console.log(req.body);
    newItem.save(function (err, item) { 
        if (err) { 
            res.status(400).json(err);
        }
       
        res.redirect('back');
});
};
// CRUD - get , read item
exports.getItems = function(req, res) {
  Item.find({}, function (err, items) {
    if (err) {
      res.status(400).json(err); 
    }
   
    
    res.render('index', {
        data: items
    })
  }); 
};
// CRUD update item
exports.getItem = function(req, res) {
  Item.findOne({_id: req.params.id}, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};
//Getting item from mongodb
exports.updateItem = function(req, res) {
  Item.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};

// CRUD Delete
exports.deleteItem = function(req, res) {
  Item.findByIdAndRemove(req.params.id, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};