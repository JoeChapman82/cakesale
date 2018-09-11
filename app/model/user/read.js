const User = require('./user');

module.exports = {
    all: () => User.find({}),
    byId: (id) => User.findById(id),
    toAuthenticate: (location, password) => User.findOne({location: location, password: password})
};
