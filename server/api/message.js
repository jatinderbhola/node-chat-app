var express = require('express');
var router = express.Router();
var Session = require("../lib/session");
var { message } = require("./../models");
var { socket } = require("./../lib");
const e = require('express');

/* GET users listing. */
router
    .get('/', function (req, res, next) {
        message.model.find({}, (err, messages) => {
            res.send(messages);
        });
    })
    .post('/', async function (req, res, next) {
        try {
            var messageModel = new message.model(req.body);

            var savedMessage = await messageModel.save();

            if (savedMessage && savedMessage._id) {
                console.log('saved');

                socket.io.emit('load-message', req.body);
                res.sendStatus(200);
            } else {
                console.error('message failed to saved');
                res.sendStatus(409);
            }
        }
        catch (error) {
            res.sendStatus(500);
            return console.log('error', error);
        }
        finally {
            console.log('Message Posted');
        }
    });

router
    .post('/:user', function (req, res, next) {
        var user = req.params.user;
        message.model.find({ name: user }, (err, messages) => {
            res.send(messages);
        });
    })
    .put('/:id', function (req, res, next) {
        res.send(`update message ${req.params.id}`);
    })
    .delete('/:id', function (req, res, next) {
        res.send(`delete message ${req.params.id}`);
    });

module.exports = router;
