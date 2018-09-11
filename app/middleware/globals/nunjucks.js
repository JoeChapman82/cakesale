const nunjucks = require('nunjucks');
const expressNunjucks = require('express-nunjucks');
const path = require('path');
const config = require('../../config/main');

module.exports = (app) => {

    app.set('view engine', 'njk');

    nunjucks.configure(path.join(__dirname, '../../views/'), {
        autoescape: true,
        express: app,
        noCache: config.isNotProd,
        watch: config.isNotProd
    });

    return app;
};
