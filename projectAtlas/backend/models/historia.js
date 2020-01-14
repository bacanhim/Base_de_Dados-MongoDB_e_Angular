var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var clubeSchema = new Schema({nome: 'string', cor: 'string'}, {_id: false});
var historiaSchema = Schema({
    titulo: String,
    pessoa: {type: Schema.Types.ObjectID, ref: 'Pessoa'}
});
var historia = mongoose.model('Historia', historiaSchema, 'historia');
module.exports = historia;