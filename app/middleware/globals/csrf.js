const csurf = require('csurf');
const config = require('../../config/main');

module.exports = (app) => {
    app.use(csurf({cookie: {maxAge: config.csrfLifespan, httpOnly: true, signed: true, secure: true}}));

    app.use((req, res, next) => {
        res.locals._csrf = req.csrfToken();
        next();
    });
    return app;
};
