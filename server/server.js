var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var companies = require('./routes/companies.js');
var cars = require('./routes/cars.js');

var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/companies', companies);
app.use('/cars', cars);

app.listen(port, function(){
    console.log('listening on port', port);  
});