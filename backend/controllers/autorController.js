const { Autor: AutorModel} = require("../model/Autor");

const autorController = {

    create: async(req, res) => {
        try {

            const autor = {
                nome: req.body.nome,
                cpf: req.body.cpf,
                email: req.body.email,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                formacao: req.body.formacao
            };

            const response = await AutorModel.create(autor);

            res.status(201).json({response, msg: "Autor criado com sucesso!"});

        } catch (error){
            console.log(error);
        }
    },
    getAll: async(req, res) => {
        try {
            const autor = await AutorModel.find();
            res.json(autor);
            
        } catch (error) {
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const autor = await AutorModel.findById(id);

            if(!autor){
                res.status(404).json({msg: "Autor não encontrado"});
                return;
            }

            res.json(autor);
        } catch (error) {
            console.log(error);
        }
    }
    
};

module.exports =   autorController ;