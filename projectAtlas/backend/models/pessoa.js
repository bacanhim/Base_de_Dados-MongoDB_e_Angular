var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var clubeSchema = new Schema({nome:'string',cor:'string'},{_id:false});

var moradaSchema = require('./morada');

var pessoaSchema = new Schema({
    _id:{
        type: objectId, auto:true
    },
    nome:{
        type:String, require:true
    },
    apelido:{
        type:String
    },
    numtelemovel:{
        type:String
    },morada:moradaSchema,
    data_de_nascimento:{
        type:Date , default:Date.now()
    },clubes:[clubeSchema]
},{
    versionKey:false
});

var pessoa = mongoose.model('Pessoa',pessoaSchema,'pessoas');
module.exports = pessoa;
