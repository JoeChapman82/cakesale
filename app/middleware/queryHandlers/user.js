const find = require('../../model/user/read');
const redirects = require('../../controllers/redirects');

module.exports = {
    findAll: (req, res, next) => {
        find.all()
        .then(response => {
            res.locals.users = response;
            return next();
        })
        .catch((error) => {
            return redirects.error(req, res);
        });
    },
    findForSession: (req, res, next) => {
        find.byId(res.locals.userId)
        .then((response) => {
            if(response === null) {
                res.clearCookie('oh_my_gosh_a_cookie');
                return redirects.index(req, res);
            }
            res.locals.locatedUser = response;
            return next();
        })
        .catch((error) => {
            return redirects.error(req, res);
        });
    },
    findToAuthenticate: (req, res, next) => {
        find.toAuthenticate(req.body.location.toLowerCase(), req.body.password)
        .then((response) => {
            if(response === null) {
                return redirects.index(req, res);
            }
            res.locals.locatedUser = response;
            return next();
        })
        .catch((error) => {
            return redirects.error(req, res);
        });
    }
};
