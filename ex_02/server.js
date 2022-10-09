const config = require("../config");
const express = require("express");
const bodyParser=require('body-parser');
const api = require('./routes');
const app = express();
var cors = require('cors')

app.set('view engine', 'ejs');


app.listen(config.port, function() {
    console.log("Server is listening at port:" + config.port);
});

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(cors());
app.use('', api);

