const redirects = require('../controllers/redirects');

module.exports = {
    send: (req, res, next) => {
        res.cookie('oh_my_gosh_a_cookie', res.locals.locatedUser._id, { maxAge: 3000000, httpOnly: true, signed: true, secure: true });
        next();
    },
    retrieve: (req, res, next) => {
        res.locals.userId = req.signedCookies.oh_my_gosh_a_cookie;
        if(!res.locals.userId || typeof res.locals.userId === 'undefined') {
            res.clearCookie('oh_my_gosh_a_cookie');
            return redirects.index(req, res);
        }
        next();
    }
};
