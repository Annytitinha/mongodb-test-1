var express = require('express'),
router = express.Router(),
userCtrl = require('./Controllers/catalog-controller');

router.post('/items', itemCtrl.createItem);
router.get('/items', itemCtrl.getItems);
router.get('/items/:_id', itemCtrl.getItem);
router.delete('/items/:_id', itemCtrl.deleteItem);
router.put('/items/:_id', itemCtrl.updateItem);

module.exports.UPLOAD_PATH = 'uploads';

var multer = require('multer');
var upload = multer({ dest: module.exports.UPLOAD_PATH });


module.exports = router;
