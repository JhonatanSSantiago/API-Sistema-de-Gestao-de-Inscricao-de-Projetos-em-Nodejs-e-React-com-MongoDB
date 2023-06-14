const router = require("express").Router();
const avaliadorController = require("../controllers/avaliadorController");

router.route("/avaliador").post((req, res) => avaliadorController.create(req, res));

router.route("/avaliador").get((req, res) => avaliadorController.getAll(req, res));

router.route("/avaliador/:id").get((req, res) => avaliadorController.get(req, res));

router.route("/avaliador/:id").delete((req, res) => avaliadorController.delete(req, res));

router.route("/avaliador/:id").put((req, res) => avaliadorController.update(req, res));
module.exports = router;