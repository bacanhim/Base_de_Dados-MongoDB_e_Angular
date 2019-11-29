var mongoose = require(mongoose),
    Schema = mongoose.Schema,
    objectId = mongoose.schema.objectId;
var pessoaSchema = new Schema({
    _id: {type: objectId, auto: true},
    nome: {type: String, required: true},
    apelido: {type: String},
    numTelemovel: {type: String},
    data_de_nascimento: {type: Date, default: Date.now()}
}, {
    versionKey: false
});
var pessoa = mongoose.model('pessoa', pessoaSchema, 'pessoas');
module.exports = pessoa;