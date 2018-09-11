const Cake = require('./cake');

module.exports = {
    byName: (name) => Cake.find({name: name}),
};
