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
        type: String,
        required: true,
    },
    nota: {
        type: Number,
        required: true,
    },
    dataAvaliacao: {
        type: String,
        required: true
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