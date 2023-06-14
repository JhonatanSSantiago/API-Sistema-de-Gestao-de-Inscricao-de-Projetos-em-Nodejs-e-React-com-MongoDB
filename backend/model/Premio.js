const mongoose = require("mongoose");
const { Schema } = mongoose;

const premioSchema = new Schema(
    {
        nome: {
            type: String
        },
        descricao: {
            type: String
        },
        ano: {
            type: String
        },
        inicio: {
            type: String
        },
        encerramento: {
            type: String
        },
        inscricao: {
            type: String
        },
        avaliacao: {
            type: String
        },
        resultado: {
            type: String
        }
    },{ timestamps: true} //salva data de criação e atualização
);

const Premio = mongoose.model("Premio", premioSchema);

module.exports = {
    Premio,
    premioSchema,
};
