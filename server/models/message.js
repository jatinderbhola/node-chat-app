let mongoose = require('mongoose');

let MessageModel = mongoose.model('Message', {
    name: String,
    message: String
});


module.exports = {
    model: MessageModel
};