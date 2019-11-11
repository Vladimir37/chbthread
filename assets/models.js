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

const Profile = new Schema({
    city: String,
    gender: Number,
    age: Number,
    targetGender: Number,
    aboutMe: String,
    aboutTarget: String,
    contacts: String,
    date: Date,
    deleteCode: String,
});
models.ProfileModel = mongoose.model('Profile', Profile);

module.exports = models;