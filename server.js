var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {
    res.sendFile(path.join('/index.html'));
});

app.post('/authenticate', function(req, res) {
    var data = {
        token: Math.random()*50000000000,
        expires: (new Date()) + 2
    };
    console.log(data);
    res.send(data);
});

app.listen(3000);
