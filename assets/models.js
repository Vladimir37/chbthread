const mongoose = require('mongoose');
const config = require('../config');

const Schema = mongoose.Schema;

let db = mongoose.connect(config.db);

let models = {};

const User = new Schema({
    status: Number,
    login: String,
    pass: String,
});
models.UserModel = mongoose.model('User', User);

module.exports = models;