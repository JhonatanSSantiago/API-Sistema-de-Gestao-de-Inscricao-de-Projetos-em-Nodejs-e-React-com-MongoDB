const mongoose = require("mongoose");
const { Schema } = mongoose;
const { autorSchema } = require("./Autor");

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
        type: autorSchema
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