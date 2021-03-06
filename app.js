var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

var cors = require('cors');
var path = require('path');

var app = express();

const caRoute = require ('./routes/caRoute.js');

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/rentCar');

//no connection
mongoose.connection.on('connected', ()=>{
    console.log('connected to database mongoDB @27017')
});
mongoose.connection.on('error', (err)=>{
    console.log('got an error: '+err);
});

//port N°
const port = 3000;

//adding middleware - cors
app.use(cors());

//body parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', caRoute);

//testing server
app.get('/', (req, res) => {
    res.send('foobar');
});


app.listen(port, ()=>{
    console.log('server strated at port '+ port);
});


