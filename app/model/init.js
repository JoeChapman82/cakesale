const mongoose = require('mongoose');
const db = process.env.MONGODB_URI;

module.exports = () => {
    mongoose.connect(db, {useNewUrlParser: true});
    mongoose.set('useCreateIndex', true);
    mongoose.connection
    .once('open', () => console.log('Connection establised with mongo cake-a-base'))
    .on('error', () => console.warn('error connecting to cake db'));
};
