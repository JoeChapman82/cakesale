const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CakeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true,
        default: 0,
        }
});

const Cake = mongoose.model('cake', CakeSchema);
module.exports = Cake;
