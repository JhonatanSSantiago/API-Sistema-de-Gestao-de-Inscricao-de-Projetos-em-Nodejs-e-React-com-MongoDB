const router = require("express").Router();

const projetoController = require("../controllers/projetoController");

router.route("/projeto").post((req, res)=> projetoController.create(req, res));

router.route("/projeto").get((req, res) => projetoController.getAll(req, res));

router.route("/projeto/:id").get((req, res) => projetoController.get(req, res));

router.route("/projeto/:id").delete((req, res) => projetoController.delete(req, res));


module.exports = router;