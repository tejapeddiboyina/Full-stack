var mongoose = require('mongoose'),
    dburl = 'mongodb://localhost:27017/mevn';

mongoose.connect(dburl);

//connections events
mongoose.connection.on('connected', function(){
    console.log('connected to ', dburl);
});

mongoose.connection.on('error', function(err){
    console.log('error occured ', err);
});

mongoose.connection.on('disconnected', function(){
    console.log('disconnected');
});

require('../model/sample');