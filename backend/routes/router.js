const router = require("express").Router();

//Autor router
const autorRouter = require("./autorRoute");

router.use("/", autorRouter);



module.exports = router;