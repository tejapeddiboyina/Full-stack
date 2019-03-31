var express = require('express');
var router = express.Router();
var msg = require('../controller/msg.controller');

router
    .route('/')
    .get(msg.string)

router
    .route('/json')
    .get(msg.jjson)

router
    .route('/sample')
    .get(msg.sample)

router
    .route('/getOne/:samId')
    .get(msg.getOne)
    .put(msg.edit)

router
    .route('/addSample')
    .post(msg.addSample)

module.exports = router;