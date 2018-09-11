const initialUsers = require('../config/initialUsers');
const createUser = require('../model/user/create');
const redirects = require('../controllers/redirects');

module.exports = (req, res, next) => {
    if(res.locals.users.length === 0) {
        let calls = [];
        initialUsers.forEach((user) => {
            calls.push(createUser(user.location, user.password));
        });
        Promise.all(calls)
        .then((responses) => {
            responses.forEach((response) => {
                console.log(response);
            });
            return next();
        })
        .catch((error) => {
            return redirects.index(req, res);
        });
    } else {
        return next();
    }
};
