var express = require('express'),
router = express.Router(),
userCtrl = require('./Controllers/catalog-controllerlerler');

router.post('/items', itemCtrl.createItem);
router.get('/items', itemCtrl.getItems);
router.get('/items/:_id', itemCtrl.getItem);
router.delete('/items/:_id', itemCtrl.deleteItem);
router.put('/items/:_id', itemCtrl.updateItem);

module.exports.UPLOAD_PATH = 'uploads';

var multer = require('multer');
var upload = multer({ dest: module.exports.UPLOAD_PATH });
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;
