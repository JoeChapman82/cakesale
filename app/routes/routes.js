const getController = require('../controllers/getController');
const postController = require('../controllers/postController');

module.exports = (app) => {
    app.get('/', getController.index);
    app.get('/login', getController.login);
    app.post('/login', postController.login);
    app.get('/update', getController.update);
    app.post('/update', postController.update);
    app.get('/404', getController.notFound);
    app.get('/error', getController.error);
    app.get('/secret', getController.secret);
    app.all('*', getController.catchAll);
    return app;
};
