const router = require("express").Router();
const autorController = require("../controllers/autorController");

router.route("/autor").post((req, res) => autorController.create(req, res));

router.route("/autor").get((req, res) => autorController.getAll(req, res));

router.route("/autor/:id").get((req, res) => autorController.get(req, res));

module.exports = router;