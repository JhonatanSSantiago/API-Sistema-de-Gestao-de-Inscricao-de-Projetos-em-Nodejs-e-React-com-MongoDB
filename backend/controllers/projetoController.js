const { Projeto: ProjetoModel } = require("../model/Projeto");

const projetoController = {
    create: async(req, res) => {
        try{
            const projeto = {
                area: req.body.area,
                titulo: req.body.titulo,
                resumo: req.body.resumo,
                autor: req.body.autor,
                status: req.body.status,
                data_envio: req.body.data_envio,
            };
            const response = await ProjetoModel.create(projeto);
            res.status(201).json({response, msg: "Projeto Salvo com sucesso"})
        } catch (error){
            console.log("Erro: "+ error);
        }
    }
};

module.exports = projetoController;