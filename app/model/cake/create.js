const Cake = require('./cake');

module.exports = (name) => {
    const cake = new Cake({name: name});
    return cake.save();
};
