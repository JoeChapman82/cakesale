const renders = require('./renders');
const redirects = require('./redirects');
const queryUser = require('../middleware/queryHandlers/user');
const queryCake = require('../middleware/queryHandlers/cake');
const cookieManagement = require('../middleware/cookieManagement');

module.exports = {
    login: [queryUser.findToAuthenticate, cookieManagement.send, redirects.update],
    update: [queryCake.increment, redirects.update]
};
