const mongoose = require("mongoose");
const { Schema } = mongoose;

const cronogramaSchema = new Schema({
    inscricao: {
        type: String,
        required: true,
    },
    avaliacao: {
        type: String,
        required: true,
    },
    resultado: {
        type: String,
        required: true,
    }
},{ timestamps: true});

const Cronograma = mongoose.model("Cronograma", cronogramaSchema);

module.exports = {
    Cronograma,
    cronogramaSchema,
};