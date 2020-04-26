var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser"),
mongoose = require('mongoose');

var app = express();
var port = (process.env.PORT || 3000);
var itemCtrl = require('./Controllers/catalog-controller');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('./routes'));
app.set('view engine', 'ejs');
app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});
app.get('/', itemCtrl.getItems);
app.post('/', itemCtrl.createItem);

mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});