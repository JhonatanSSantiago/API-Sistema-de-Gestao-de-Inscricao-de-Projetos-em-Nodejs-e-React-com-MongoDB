const mongoose = require("mongoose");
const { Schema } = mongoose;
const { autorSchema } = require("./Autor");

const projetoSchema = new Schema({
    area: {
        type: String,
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    resumo: {
        type: String,
        required: true,
    },
    autor: {
        type: [autorSchema],
    },
    status: {
        type: String,
        required: true,
    },
    data_envio: {
        type: String,
        required: true,
    },
},{ timestamps: true});

const Projeto = mongoose.model("Projeto", projetoSchema);

module.exports = {
    Projeto,
    projetoSchema,
};