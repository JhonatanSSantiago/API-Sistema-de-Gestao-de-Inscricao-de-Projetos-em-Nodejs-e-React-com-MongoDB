const { Avaliacao: AvaliacaoModel } = require("../model/Avaliacao");

const avaliacaoController = {
    create: async(req, res) => {
        try{
            const avaliacao = {
                projeto: req.body.projeto,
                parecer: req.body.parecer,
                nota: req.body.nota,
                dataAvaliacao: req.body.dataAvaliacao,
                avaliador: req.body.avaliador,
                premio: req.body.premio,
            };
            const response = await AvaliacaoModel.create(avaliacao);
            res.status(201).json({response, msg: "Avaliação salva com sucesso"})
        } catch (error){
            console.log("Erro: "+ error);
        }
    },
    getAll: async(req, res) => {
        try {
            const avaliacao = await AvaliacaoModel.find();
            res.json(avaliacao);
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const avaliacao = await AvaliacaoModel.findById(id);
            if(!avaliacao){
                res.status(404).json({msg: "Avaliacão não encontrada"});
                return;
            }
            res.json(avalicao);
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const avaliacao = await AvaliacaoModel.findById(id);
            if(!avaliacao){
                res.status(404).json({msg: "Avaliação não encontrada"});
                return;
            }
            const deletedAvalicao = await AvaliacaoModel.findByIdAndDelete(id);
            res.status(200).json({deletedAvalicao, msg: "Avaliação excluída com sucesso"});            
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    update: async (req, res) => {
        try{
            const id = req.params.id

            const avaliacao = {
                projeto: req.body.projeto,
                parecer: req.body.parecer,
                nota: req.body.nota,
                dataAvaliacao: req.body.dataAvaliacao,
                avaliador: req.body.avaliador,
                premio: req.body.premio,
            };
    
    
            const updateAvaliacao = await AvaliacaoModel.findByIdAndUpdate(id, avaliacao);
            if(!avaliacao){
                res.status(404).json({msg: "Avaliação não encontrado"});
                return;
            }
            res.status(200).json({ avaliacao, msg: "Avaliação atualizada com sucesso!"});
        }catch (error) {
            console.log("Erro: "+ error);
        }
    }
};

module.exports = avaliacaoController;