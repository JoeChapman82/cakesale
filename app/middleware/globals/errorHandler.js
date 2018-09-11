const responses = require('../../controllers/responses');

module.exports = (err, req, res, next) => {
    console.log('error', err);
    return responses.serverError(req, res, next);
};
