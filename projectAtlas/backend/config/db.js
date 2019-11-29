var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb+srv://admin:9fc996898194@cluster0-qmqgo.azure.mongodb.net/test?retryWrites=true&w=majority');
module.exports = connection;