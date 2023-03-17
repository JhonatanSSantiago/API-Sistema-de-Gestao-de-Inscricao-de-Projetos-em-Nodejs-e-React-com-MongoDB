
const mongoose = require('mongoose');

async function main(){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect('mongodb://127.0.0.1:27017/sgip');
        console.log("Conectado do Banco!");
    } catch (error) {
        console.log("Erro: ${eror}");
    }
}


module.exports = main
