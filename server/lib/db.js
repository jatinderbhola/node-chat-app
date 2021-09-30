/**
 * @author jatinder bhola
 * @email jatinderbhola@gmail.com
 * @create date 2021-09-30 15:39:18
 * @modify date 2021-09-30 15:39:39
 * @desc database connection
 */

var mongoose = require("mongoose");

var dbUrl = "mongodb://localhost:27017/node-chat-app";


var connect = function (callback) {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            return callback(err, false);
        }
        callback(null, true);
    });
};

module.exports = {
    connect: connect
};