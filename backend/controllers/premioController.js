const { Premio: PremioModel} = require("../model/Premio");

const premioController = {
    create: async(req, res) => {
        try {
            const premio = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                ano: req.body.descricao,
                inicio: req.body.inicio,
                encerramento: req.body.encerramento,
                inscricao: req.body.inscricao,
                avaliacao: req.body.avaliacao,
                resultado: req.body.resultado              
            }
            const response =await PremioModel.create(premio);
            res.status(201).json({response, msg: "Prêmio criado com sucesso!"});
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    getAll: async(req, res) => {
        try {
            const premio = await PremioModel.find();
            res.json(premio);           
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const premio = await PremioModel.findById(id);
            if(!premio){
                res.status(404).json({msg: "Premio não encontrado"});
                return;
            }
            res.json(premio);
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const premio = await PremioModel.findById(id);
            if(!premio){
                res.status(404).json({msg: "Prêmio não encontrado"});
                return;
            }
            const deletedPremio = await PremioModel.findByIdAndDelete(id);
            res.status(200).json({deletedPremio, msg: "Prêmio excluído com sucesso"});            
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    update: async (req, res) => {
        try{
            const id = req.params.id

            const premio = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                ano: req.body.ano,
                inicio: req.body.inicio,
                encerramento: req.body.encerramento,
                inscricao: req.body.inscricao,
                avaliacao: req.body.avaliacao,
                resultado: req.body.resultado     
            }
    
            const updatePremio = await PremioModel.findByIdAndUpdate(id, premio);
            if(!premio){
                res.status(404).json({msg: "Premio não encontrado"});
                return;
            }
            res.status(200).json({ premio, msg: "Premio atualizado com sucesso!"});
        }catch (error) {
            console.log("Erro: "+ error);
        }
    }
};

module.exports = premioController;