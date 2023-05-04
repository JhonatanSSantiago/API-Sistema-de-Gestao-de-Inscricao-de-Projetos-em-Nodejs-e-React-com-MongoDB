const mongoose = require("mongoose");
const { Schema } = mongoose;
const { cronogramaSchema } = require("./Cronograma");

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
        cronograma: {
            type: cronogramaSchema
        },
        inicio: {
            type: String
        },
        encerramento: {
            type: String
        },
    },{ timestamps: true} //salva data de criação e atualização
);

const Premio = mongoose.model("Premio", premioSchema);

module.exports = {
    Premio,
    premioSchema,
};
