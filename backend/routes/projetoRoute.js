const router = require("express").Router();

const projetoController = require("../controllers/projetoController");

router.route("/projeto").post((req, res)=> projetoController.create(req, res));



module.exports = router;