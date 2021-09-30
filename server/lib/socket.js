/**
 * @author jatinder bhola
 * @email jatinderbhola@gmail.com
 * @create date 2021-09-30 15:39:18
 * @modify date 2021-09-30 15:40:08
 * @desc Soctek IO manager
 */


var io = undefined;
const initializeSocket = async function initializeSocket(app) {
    return new Promise(async function (resolve, reject) {
        try {
            var http = require('http').createServer(app);
            io = require("socket.io")(http);

            io.on('connection', () => {
                console.log('a user is connected');
                app.set("io", io);
                resolve();
            });
        } catch (err) {
            reject(err);
        }
    });
};


module.exports = {
    initializeSocket,
    io
};