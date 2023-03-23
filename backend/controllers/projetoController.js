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
    },
    getAll: async(req, res) => {
        try {
            const projeto = await ProjetoModel.find();
            res.json(projeto);
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const projeto = await ProjetoModel.findById(id);
            if(!projeto){
                res.status(404).json({msg: "Projeto não encontrado"});
                return;
            }
            res.json(projeto);
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const projeto = await ProjetoModel.findById(id);
            if(!projeto){
                res.status(404).json({msg: "Projeto não encontrado"});
                return;
            }
            const deletedProjeto = await ProjetoModel.findByIdAndDelete(id);
            res.status(200).json({deletedProjeto, msg: "Projeto excluído com sucesso"});            
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
};

module.exports = projetoController;