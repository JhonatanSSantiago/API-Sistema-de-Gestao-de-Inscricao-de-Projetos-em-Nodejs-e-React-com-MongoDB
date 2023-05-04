const mongoose = require("mongoose");
const { Schema } = mongoose;

const avaliadorSchema = new Schema(
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
        senha: {
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

const Avaliador = mongoose.model("Avaliador", avaliadorSchema);

module.exports = {
    Avaliador,
    avaliadorSchema,
};