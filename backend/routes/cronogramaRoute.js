const router = require("express").Router();
const cronogramaController = require("../controllers/cronogramaController");

router.route("/cronograma").post((req, res) => cronogramaController.create(req, res));

router.route("/cronograma").get((req, res) => cronogramaController.getAll(req, res));

router.route("/cronograma/:id").get((req, res) => cronogramaController.get(req, res));

router.route("/cronograma/:id").delete((req, res) => cronogramaController.delete(req, res));

router.route("/cronograma/:id").put((req, res) => cronogramaController.update(req, res));

module.exports = router;