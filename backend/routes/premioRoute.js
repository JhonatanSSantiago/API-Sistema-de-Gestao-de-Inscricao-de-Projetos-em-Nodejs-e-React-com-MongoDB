const router = require("express").Router();
const premioController = require("../controllers/premioController");

router.route("/premio").post((req, res) => premioController.create(req, res));

router.route("/premio").get((req, res) => premioController.getAll(req, res));

router.route("/premio/:id").get((req, res) => premioController.get(req, res));

router.route("/premio/:id").delete((req, res) => premioController.delete(req, res));

router.route("/premio/:id").put((req, res) => premioController.update(req, res));
module.exports = router;