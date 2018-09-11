const helmet = require('helmet');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const requireDir = require('require-dir');
const globals = requireDir('./globals');

const routes = require('../routes/routes');


module.exports = (app) => {
    globals.helmet(app);
    app.set('trust proxy', 1);
    globals.serveFavicon(app);
    globals.serveStatic(app);
    globals.nunjucks(app);
    globals.cookieParser(app);
    globals.bodyParser(app);
    globals.csrf(app);
    routes(app);
    app.use(globals.errorHandler);
    return app;
};
