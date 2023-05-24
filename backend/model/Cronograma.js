const mongoose = require("mongoose");
const { Schema } = mongoose;

const cronogramaSchema = new Schema({
    
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
},{ timestamps: true});

const Cronograma = mongoose.model("Cronograma", cronogramaSchema);

module.exports = {
    Cronograma,
    cronogramaSchema,
};