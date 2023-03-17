const mongoose = require("mongoose");
const { Schema } = mongoose;
const { cronogramaSchema } = require("./Cronograma");

const premioSchema = new Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        ano: {
            type: String,
            required: true
        },
        cronograma: {
            type: cronogramaSchema
        },
        inicio: {
            type: String,
            required: true
        },
        encerramento: {
            type: String,
            required: true
        },
    },{ timestamps: true} //salva data de criação e atualização
);

const Premio = mongoose.model("Premio", premioSchema);

module.exports = {
    Premio,
    premioSchema,
};
