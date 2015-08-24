
var _ = require('lodash');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var port = process.env.PORT || 3333;

var mongoPro = "";
var mongoDev = 'mongodb://localhost:27017/citydb';
//mongoose.connect(mongoDev);


app.use(express.static(__dirname +'/Public'));
app.use(bodyparser.json());


app.listen(port, function(){
console.log("Listening on port " + port);

});
