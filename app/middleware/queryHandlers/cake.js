const find = require('../../model/cake/read');
const update = require('../../model/cake/update');
const create = require('../../model/cake/create');
const redirects = require('../../controllers/redirects');
const cakeName = process.env.CAKE_NAME;

module.exports = {
    findByName: (req, res, next) => {
        find.byName(cakeName)
        .then((response) => {
            if(response.length === 0) {
                return create(cakeName)
                .then((response) => {
                    res.locals.totalCakes = 0;
                    return next();
                })
                .catch((error) => {
                    return redirects.error(req, res);
                });
            } else {
                res.locals.totalCakes = response[0].amount;
                return next();
            }
        })
        .catch((error) => {
            return redirects.error(req, res);
        });
    },
    increment: (req, res, next) => {
        update.increment()
        .then((response) => {
            return next();
        })
        .catch((error) => {
            return redirects.error(req, res);
        });
    }
};
