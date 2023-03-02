const express = require("express");
const path = require('path');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/fake.html'))

});

app.listen(8000);
console.log('Express server started'+app.path.host);