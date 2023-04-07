const { Autor: AutorModel} = require("../model/Autor");
const bcrypt = require('bcrypt');

const autorController = {

    create: async(req, res) => {
        const {nome, cpf, email, senha, confirmedSenha, telefone, endereco, formacao} = req.body

        //validações
        if(!nome) {
            return res.status(422).json({msg: "Nome obrigatorio"})
        }
        if(!email) {
            return res.status(422).json({msg: "Email obrigatorio"})
        }
        if(!senha) {
            return res.status(422).json({msg: "Senha obrigatoria"})
        }
        if(senha !== confirmedSenha) {
            return res.status(422).json({msg: "Senhas diferentes"})
        }
        const autorExists = await AutorModel.findOne({email: email})

        if(autorExists){
            return res.status(422).json({msg: "email já cadastrado"})
        }

        //cript senha
        const salt = await bcrypt.genSalt(2)
        const senhaHash = await bcrypt.hash(senha, salt)

        try {
            const autor = {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senhaHash,
                telefone: telefone,
                endereco: endereco,
                formacao: formacao
            };
            const response = await AutorModel.create(autor);
            res.status(201).json({response, msg: "Autor criado com sucesso!"});
        } catch (error){
            console.log("Erro: "+ error);
        }
    },
    getAll: async(req, res) => {
        try {
            const autor = await AutorModel.find();
            res.json(autor);           
        } catch (error) {
            console.log("Erro: "+ error);
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
            console.log("Erro: "+ error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const autor = await AutorModel.findById(id);
            if(!autor){
                res.status(404).json({msg: "Autor não encontrado"});
                return;
            }
            const deletedAutor = await AutorModel.findByIdAndDelete(id);
            res.status(200).json({deletedAutor, msg: "Autor excluído com sucesso"});            
        } catch (error) {
            console.log("Erro: "+ error);
        }
    },
    update: async (req, res) => {
        try{
            const id = req.params.id

            const autor = {
                nome: req.body.nome,
                cpf: req.body.cpf,
                email: req.body.email,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                formacao: req.body.formacao
            };
    
            const updateAutor = await AutorModel.findByIdAndUpdate(id, autor);
            if(!autor){
                res.status(404).json({msg: "Autor não encontrado"});
                return;
            }
            res.status(200).json({ autor, msg: "Autor atualizado com sucesso!"});
        }catch (error) {
            console.log("Erro: "+ error);
        }
    },

    login: async(req, res) => {
        const {email, senha} = req.body

        if(!email) {
            return res.status(422).json({msg: "Email obrigatorio"})
        }
        if(!senha) {
            return res.status(422).json({msg: "Senha obrigatorio"})
        }

        const autor = await AutorModel.findOne({email: email})

        if(!autor){
            return res.status(404).json({msg: "email não cadastrado"})
        }

        const checkSenha = await bcrypt.compare(senha,autor.senha )

        if(!checkSenha){
            return res.status(422).json({msg: "senha incorreta"})
        }

        try {
        // const secret = process.env.SECRET

        //   const token = jwt.sign({id: autor._id}, secret)

            res.status(200).json({idAutor: autor._id, msg: "login com sucesso"})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: error})
        }

    }
    
};

module.exports =   autorController ;