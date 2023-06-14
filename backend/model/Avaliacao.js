const mongoose = require("mongoose");
const { Schema } = mongoose;

const avaliacaoSchema = new Schema({
    projeto: {
        type: mongoose.ObjectId
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
    premio: {
        type: mongoose.ObjectId
    }
},{ timestamps: true});

const Avaliacao = mongoose.model("Avaliacao", avaliacaoSchema);

module.exports = {
    Avaliacao
};