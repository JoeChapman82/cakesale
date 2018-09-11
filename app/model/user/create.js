const User = require('./user');

module.exports = (location, password) => {
    const user = new User({location: location, password: password});
    return user.save();
};
