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
    }
    
};

module.exports =   autorController ;