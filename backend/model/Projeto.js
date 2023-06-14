const mongoose = require("mongoose");
const { Schema } = mongoose;

const projetoSchema = new Schema({
    area: {
        type: String
    },
    titulo: {
        type: String
    },
    resumo: {
        type: String
    },
    premio: {
        type: mongoose.ObjectId
    },
    autor: {
        type: mongoose.ObjectId
    },
    status: {
        type: String
    },
    data_envio: {
        type: String
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
        type: mongoose.ObjectId
    },
},{ timestamps: true});

const Projeto = mongoose.model("Projeto", projetoSchema);

module.exports = {
    Projeto,
    projetoSchema,
};