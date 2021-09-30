let express = require('express');
let router = express.Router();
let Session = require("../lib/session");
let { chatRoom, message } = require("./../models");

/* GET users listing. */
router
    .get('/', function (req, res, next) {
        res.json(chatRoom);
    })
    .post('/', function (req, res, next) {

        let currentUser = Session.getUser();

        // chatRoom>model>createNewChatRoom()
        let newChatRoom = {
            "_id": "CR1",
            "name": req.body.name,
            "personRef": [currentUser._id, req.body.personRef]
        };
        res.json(newChatRoom);
    });

router
    .get('/:id', function (req, res, next) {
        const chatRoomId = req.params.id;
        let chatRoomMessage = message.filter(msg => msg.chatRoomRef === chatRoomId);
        res.json(chatRoomMessage);
    })
    .put('/:id', function (req, res, next) {
        res.send(`update chat room ${req.params.id}`);
    })
    .delete('/:id', function (req, res, next) {
        res.send(`delete chat room ${req.params.id}`);
    });

module.exports = router;




