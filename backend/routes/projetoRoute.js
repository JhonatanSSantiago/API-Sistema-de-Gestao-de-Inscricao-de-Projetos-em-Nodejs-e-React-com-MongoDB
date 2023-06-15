const router = require("express").Router();

const projetoController = require("../controllers/projetoController");

router.route("/projeto").post((req, res)=> projetoController.create(req, res));

router.route("/projeto").get((req, res) => projetoController.getAll(req, res));

router.route("/projeto/:id").get((req, res) => projetoController.get(req, res));

router.route("/projeto/:id").delete((req, res) => projetoController.delete(req, res));

router.route("/projeto/:id").put((req, res) => projetoController.update(req, res));

router.route("/projeto/maioresnotas").get((req, res) => projetoController.getProjetosPorNotaMaior(req, res));



module.exports = router;