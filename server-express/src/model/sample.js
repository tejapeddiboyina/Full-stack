var mongoose = require('mongoose');

var sampleSchema = new mongoose.Schema({
    name : String,
    version : String
});

mongoose.model('Sample', sampleSchema, 'sample');