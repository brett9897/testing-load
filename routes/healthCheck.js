/**
 * Created by Brett on 12/9/2016.
 */
var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
    res.json({status: 'OK'});
});

module.exports = router;