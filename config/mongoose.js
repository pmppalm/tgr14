var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
    mongoose.set('debug', config.debug);
    //var db = mongoose.connect(config.mongoUri);
    //var db = mongoose.connect('mongodb://tgr13:silpakorn13@ds235775.mlab.com:35775/heroku_jm7p5fsc');
    //var db = mongoose.connect('mongodb://heroku_jvp8kncs:tloup834159i629f624onibgbn@ds117101.mlab.com:17101/heroku_jvp8kncs');
    var db = mongoose.connect('mongodb://heroku_jvp8kncs:tloup834159i629f624onibgbn@ds117101.mlab.com:17101/heroku_jvp8kncs');
    require('../app/models/user.model');
    require('../app/models/exam.model');
    return db;
}