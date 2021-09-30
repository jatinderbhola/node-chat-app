/**
 * @author jatinder bhola
 * @email jatinderbhola@gmail.com
 * @create date 2021-09-30 15:39:18
 * @modify date 2021-09-30 15:39:55
 * @desc WIP - to maintian session
 */

const currentUser = function () {
    return {
        _id: "P1",
        name: "Jatinder"
    };
};

module.exports = {

    getUser: currentUser,
};