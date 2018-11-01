const config = require('../config/config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user.model')
};