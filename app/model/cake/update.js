const Cake = require('./cake');
const cakeName = process.env.CAKE_NAME;

module.exports = {
    increment: () => Cake.findOneAndUpdate({name: cakeName}, {$inc: {amount: 1}})
};
