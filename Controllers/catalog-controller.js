var Item = require('../models/item');
// CRUD CREATE item
exports.createItem = function(req, res) { 
    var newItem = new Item(req.body);
    newItem.save(function (err, item) { 
        if (err) { 
            res.status(400).json(err);
        }
       
        res.json(item); 
});
};
// CRUD - get , read item
exports.getUsers = function(req, res) {
  Item.find({}, function (err, items) {
    if (err) {
      res.status(400).json(err); 
    }
    // colocar minhas sections variaveis aqui
    res.json(obj);
  }); 
};
// CRUD update
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