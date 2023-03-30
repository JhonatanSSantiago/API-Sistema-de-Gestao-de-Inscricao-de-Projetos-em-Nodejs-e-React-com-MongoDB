const { Avaliador: AvaliadorModel} = require("../model/Avaliador");

const avaliadorController = {

    create: async(req, res) => {
        try {
            const avaliador = {
                nome: req.body.nome,
                cpf: req.body.cpf,
                email: req.body.email,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                formacao: req.body.formacao
            };
            const response = await AvaliadorModel.create(avaliador);
            res.status(201).json({response, msg: "Avaliador criado com sucesso!"});
        } catch (error){
            console.log("Erro: "+ error);
        }
    },
    getAll: async(req, res) => {
        try {
            const avaliador = await AvaliadorModel.find();
            res.json(avaliador);           
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const avaliador = await AvaliadorModel.findById(id);
            if(!avaliador){
                res.status(404).json({msg: "Avaliador não encontrado"});
                return;
            }
            res.json(avaliador);
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const avaliador = await AvaliadorModel.findById(id);
            if(!avaliador){
                res.status(404).json({msg: "Avaliador não encontrado"});
                return;
            }
            const avaliadorAutor = await AvaliadorModel.findByIdAndDelete(id);
            res.status(200).json({deletedAvaliador, msg: "Avaliador excluído com sucesso"});            
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    update: async (req, res) => {
        try{
            const id = req.params.id

            const avaliador = {
                nome: req.body.nome,
                cpf: req.body.cpf,
                email: req.body.email,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                formacao: req.body.formacao
            };
    
            const updateAvaliador = await AvaliadorModel.findByIdAndUpdate(id, avaliador);
            if(!avaliador){
                res.status(404).json({msg: "Avaliador não encontrado"});
                return;
            }
            res.status(200).json({ avaliador, msg: "Avaliador atualizado com sucesso!"});
        }catch (error) {
            console.log("Erro: "+ error);
        }
    }
    
};

module.exports =  avaliadorController ;