const router = require("express").Router();
const autorController = require("../controllers/autorController");

router.route("/autor").post((req, res) => autorController.create(req, res));

module.exports = router;