var express = require('express');
var app = express();

var bodyParser  = require('body-parser');

app.use(express.static('./empty-example')); //tell server where to use the static-files

app.use(bodyParser.json()); //set body parser for req.body


app.get('/',function(req, res){
    res.render('index.html');
});

app.listen(8080,function(){
    console.log('listening at port : 8080');
});