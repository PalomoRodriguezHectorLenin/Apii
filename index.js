const path = require('path');
const express = require('express');
const app = express();
var server = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'src')));

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});