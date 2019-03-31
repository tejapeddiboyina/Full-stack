var mongoose = require('mongoose'),
    val = require('../data/msg'),
    Sample = mongoose.model('Sample');

module.exports.string = function(req, res){
    console.log('void');
    res.send(val.name)
}

module.exports.jjson = function(req, res){
    console.log('json log');
    res.json(val)
}

module.exports.sample = function(req, res){
    console.log('sample log');
    Sample
        .find()
        .exec(function(err, sam){
            console.log('log is here', sam);
            res
                .status(200)
                .json(sam);
        });
}

module.exports.addSample = function(req, res){
    console.log('add sample log');
    Sample
        .create({
            name : req.body.name,
            version : req.body.version
        },function(err, sam){
            if(err) console.log('sam log', err);
            else{
                console.log('sam log', sam);
                res.json(sam);
            }
        })
}

module.exports.getOne = function(req, res){
    var samId = req.params.samId;
    console.log('sam id', samId);
    Sample
        .findById(samId)
        .exec(function(err, sam){
            if(err) console.log(err);
            else{
                console.log('sam one log', sam);
                res.json(sam);
            }
        })
}

module.exports.edit = function(req, res){
    var samId = req.params.samId;
    console.log('sam id', samId);
    Sample
        .findById(samId)
        .exec(function(err, sam){
            if(err) console.log(err);
            else{
                sam.name = req.body.name;
                sam.version = req.body.version;
                sam
                    .save(function(err, samUpdated){
                        if(err) console.log('sam updated error', err);
                        else{
                            console.log('sam updated', samUpdated);
                            res.json(samUpdated);
                        }
                    })
            }
        })
}