let express = require('express');
let router = express.Router();
let { person } = require("./../models");


/* GET users listing. */
router
    .get('/', function (req, res, next) {
        res.send(person);
    })
    .post('/', function (req, res, next) {
        res.send(`post this person ${JSON.stringify(req.body)}`);
    });

router
    .put('/:id', function (req, res, next) {
        res.send(`update person ${req.params.id}`);
    })
    .delete('/:id', function (req, res, next) {
        res.send(`delete person ${req.params.id}`);
    });

module.exports = router;
