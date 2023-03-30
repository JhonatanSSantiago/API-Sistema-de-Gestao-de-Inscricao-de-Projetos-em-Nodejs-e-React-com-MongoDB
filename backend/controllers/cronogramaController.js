const { Cronograma: CronogramaModel} = require("../model/Cronograma");

const cronogramaController = {
    create: async(req, res) => {
        try {
            const cronograma = {
                inscricao: req.body.inscricao,
                avaliacao: req.body.avaliacao,
                resultado: req.body.resultado
            }
            const response = await CronogramaModel.create(cronograma);
            res.status(201).json({response, msg: "Cronograma criado com sucesso!"});
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    getAll: async(req, res) => {
        try {
            const cronograma = await CronogramaModel.find();
            res.json(cronograma);           
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const cronograma = await CronogramaModel.findById(id);
            if(!cronograma){
                res.status(404).json({msg: "Cronograma não encontrado"});
                return;
            }
            res.json(cronograma);
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const cronograma = await CronogramaModel.findById(id);
            if(!cronograma){
                res.status(404).json({msg: "Cronograma não encontrado"});
                return;
            }
            const deletedCronograma = await CronogramaModel.findByIdAndDelete(id);
            res.status(200).json({deletedCronograma, msg: "Cronograma excluído com sucesso"});            
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    update: async (req, res) => {
        try{
            const id = req.params.id

            const cronograma = {
                inscricao: req.body.inscricao,
                avaliacao: req.body.avaliacao,
                resultado: req.body.resultado,
            }
    
            const updateCronograma = await CronogramaModel.findByIdAndUpdate(id, cronograma);
            if(!cronograma){
                res.status(404).json({msg: "Cronograma não encontrado"});
                return;
            }
            res.status(200).json({ cronograma, msg: "Cronograma atualizado com sucesso!"});
        }catch (error) {
            console.log("Erro: "+ error);
        }
    }
};

module.exports = cronogramaController;