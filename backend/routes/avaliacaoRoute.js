const router = require("express").Router();

const avaliacaoController = require("../controllers/avaliacaoController");

router.route("/avaliacao").post((req, res)=> avaliacaoController.create(req, res));

router.route("/avaliacao").get((req, res) => avaliacaoController.getAll(req, res));

router.route("/avaliacao/:id").get((req, res) => avaliacaoController.get(req, res));

router.route("/avaliacao/:id").delete((req, res) => avaliacaoController.delete(req, res));

router.route("/avaliacao/:id").put((req, res) => avaliacaoController.update(req, res));

module.exports = router;