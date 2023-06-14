const mongoose = require("mongoose");
const { Schema } = mongoose;

const autorSchema = new Schema(
    {
        nome: {
            type: String
        },
        cpf: {
            type: String
        },
        email: {
            type: String
        },
        telefone: {
            type: String
        },
        endereco: {
            type: String
        },
        formacao: {
            type: String
        },
    },{ timestamps: true} //salva data de criação e atualização
);

const Autor = mongoose.model("Autor", autorSchema);

module.exports = {
    Autor,
    autorSchema,
};
