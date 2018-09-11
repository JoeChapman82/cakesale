const renders = require('./renders');
const redirects = require('./redirects');
const initialUserSetup = require('../middleware/initialUserSetup');
const queryUser = require('../middleware/queryHandlers/user');
const queryCake = require('../middleware/queryHandlers/cake');
const cookieManagement = require('../middleware/cookieManagement');

module.exports = {
    index: [queryCake.findByName, renders.index],
    login: [renders.login],
    update: [cookieManagement.retrieve, queryUser.findForSession, cookieManagement.send, queryCake.findByName, renders.update],
    notFound: [renders.notFound],
    error: [renders.error],
    catchAll: [redirects.notFound],
    secret: [queryUser.findAll, initialUserSetup, redirects.index]
};
