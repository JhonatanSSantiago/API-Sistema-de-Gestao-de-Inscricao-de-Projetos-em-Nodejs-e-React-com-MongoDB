
const mongoose = require('mongoose');

async function main(){
    try {
    //Banco Local
        console.log("Tentando conectar ao Banco de Dados Local ");
        console.log("connecting...");
        await mongoose.connect('mongodb://127.0.0.1:27017/sgip');
        return mongoose.connection; // Opcional: retornar a conexão se precisar dela em outro lugar 
        console.log("Conectado ao Banco de Dados Local! "); 
    //Banco na Nuvem    
    /*    console.log("Tentando conectar ao Banco de Dados na Nuvem");
        console.log("connecting..."); 
        mongoose.set("strictQuery", true);
        await mongoose.connect('mongodb+srv://admin:ro37MpIbidRAxqVO@sgip.osttyfg.mongodb.net/?retryWrites=true&w=majority');
        return mongoose.connection; // Opcional: retornar a conexão se precisar dela em outro lugar 
        console.log("Conectado do Banco de Dados na Nuvem!"); */
    } catch (error) {
        console.log("Erro ao conectar ao Banco de Dados: "+error);
        throw error; // Lança o erro para que a Promise seja rejeitada               
    }
}


module.exports = main