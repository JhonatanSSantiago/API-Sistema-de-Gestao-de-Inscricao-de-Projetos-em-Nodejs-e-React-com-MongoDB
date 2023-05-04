const mongoose = require("mongoose");
const { Schema } = mongoose;
const { projetoSchema } = require("./Projeto");
const { avaliadorSchema } = require("./Avaliador");
const { premioSchema } = require("./Premio");

const avaliacaoSchema = new Schema({
    projeto: {
        type: projetoSchema
    },
    parecer: {
        type: String
    },
    nota: {
        type: Number
    },
    dataAvaliacao: {
        type: String
    },
    avaliador: {
        type: avaliadorSchema
    },
    premio: {
        type: premioSchema
    }
},{ timestamps: true});

const Avaliacao = mongoose.model("Avaliacao", avaliacaoSchema);

module.exports = {
    Avaliacao
};