const router = require("express").Router();

const projetoController = require("../controllers/projetoController");

router.route("/projeto").post((req, res)=> projetoController.create(req, res));

router.route("/projeto").get((req, res) => projetoController.getAll(req, res));


module.exports = router;