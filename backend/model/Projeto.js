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
    autor: {
        type: mongoose.ObjectId
    },
    status: {
        type: String
    },
    data_envio: {
        type: String
    },
},{ timestamps: true});

const Projeto = mongoose.model("Projeto", projetoSchema);

module.exports = {
    Projeto,
    projetoSchema,
};