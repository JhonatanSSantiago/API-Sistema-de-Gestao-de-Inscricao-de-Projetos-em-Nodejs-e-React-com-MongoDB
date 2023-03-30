const router = require("express").Router();

//Autor router
const autorRouter = require("./autorRoute");
router.use("/", autorRouter);

//Projeto router
const projetoRouter = require("./projetoRoute");
router.use("/", projetoRouter);

//Premio router
const premioRouter = require("./premioRoute");
router.use("/", premioRouter);

//Avaliador router
const avaliadorRouter = require("./avaliadorRoute");
router.use("/", avaliadorRouter);

//Avaliacao router
const avaliacaoRouter = require("./avaliacaoRoute");
router.use("/", avaliacaoRouter);

//Cronograma router
const cronogramaRouter = require("./cronogramaRoute");
router.use("/", cronogramaRouter);


module.exports = router;