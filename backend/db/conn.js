
const mongoose = require('mongoose');

async function main(){
    try {
     /*   console.log("Tentando conectar ao Banco de Dados Local ");
        console.log("connecting...");
        await mongoose.connect('mongodb://127.0.0.1:27017/sgip');
        console.log("Conectado ao Banco de Dados Local! "); */
        console.log("Tentando conectar ao Banco de Dados na Nuvem");
        console.log("connecting..."); 
        mongoose.set("strictQuery", true);
        await mongoose.connect('mongodb+srv://admin:ro37MpIbidRAxqVO@sgip.osttyfg.mongodb.net/?retryWrites=true&w=majority');  
        console.log("Conectado do Banco de Dados na Nuvem!"); 
    } catch (error) {
        console.log("Erro ao conectar ao Banco de Dados: "+error);               
    }
}


module.exports = main