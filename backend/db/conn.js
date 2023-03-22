
const mongoose = require('mongoose');

async function main(){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect('mongodb+srv://admin:ro37MpIbidRAxqVO@sgip.osttyfg.mongodb.net/?retryWrites=true&w=majority');
        console.log("Conectado do Banco!");
    } catch (error) {
        console.log("Erro: ${eror}");
    }
}


module.exports = main