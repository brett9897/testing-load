/**
 * Created by Brett on 12/9/2016.
 */
var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
    var timeoutTime = req.query.timeout;

    if(timeoutTime) {
        setTimeout(function() {
            res.json({status: 'OK'});
        }, timeoutTime);
    }
    else {
        res.json({status: 'OK'});
    }

});

module.exports = router;