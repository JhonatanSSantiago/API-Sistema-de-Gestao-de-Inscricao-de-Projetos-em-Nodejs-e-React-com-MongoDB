const { Avaliador: AvaliadorModel} = require("../model/Avaliador");
const bcrypt = require('bcrypt');

const avaliadorController = {

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
        const avaliadorExists = await AvaliadorModel.findOne({email: email})

        if(avaliadorExists){
            return res.status(422).json({msg: "email já cadastrado"})
        }

        //cript senha
        const salt = await bcrypt.genSalt(2)
        const senhaHash = await bcrypt.hash(senha, salt)

        try {
            const avaliador = {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senhaHash,
                telefone: telefone,
                endereco: endereco,
                formacao: formacao
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
    },
    login: async(req, res) => {
        const {email, senha} = req.body

        if(!email) {
            return res.status(422).json({msg: "Email obrigatorio"})
        }
        if(!senha) {
            return res.status(422).json({msg: "Senha obrigatorio"})
        }

        const avaliador = await AvaliadorModel.findOne({email: email})

        if(!avaliador){
            return res.status(404).json({msg: "email não cadastrado"})
        }

        const checkSenha = await bcrypt.compare(senha,avaliador.senha )

        if(!checkSenha){
            return res.status(422).json({msg: "senha incorreta"})
        }

        try {
        // const secret = process.env.SECRET

        //   const token = jwt.sign({id: autor._id}, secret)

            res.status(200).json({idAvaliado: avaliador._id, msg: "login com sucesso"})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: error})
        }

    }
    
};

module.exports =  avaliadorController ;