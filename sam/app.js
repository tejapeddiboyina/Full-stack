var express = require('express'),
    app = express(),
    cors = require('cors')

app.use(cors())

app.get('/sample', function(req, res){
    console.log('sample response',req.url);
    res.send({name:"teja"});
});

app.listen(3000,function(){
    console.log('listening');
})