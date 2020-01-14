var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var moradaSchema = new Schema({endereco:'string',cod_postal:'string'});

module.exports=moradaSchema;