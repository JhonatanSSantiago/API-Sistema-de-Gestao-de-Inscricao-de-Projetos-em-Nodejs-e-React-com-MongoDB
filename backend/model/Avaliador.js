const mongoose = require("mongoose");
const { Schema } = mongoose;

const avaliadorSchema = new Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        endereco: {
            type: String,
            required: true
        },
        formacao: {
            type: String,
            required: true
        },
    },{ timestamps: true} //salva data de criação e atualização
);

const Avaliador = mongoose.model("Avaliador", avaliadorSchema);

module.exports = {
    Avaliador,
    avaliadorSchema,
};