const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//DB Connect
const conn = require("./db/conn");
conn().then(() => {
    app.listen(3000, function(){
        console.log("Servidor Online!");
    });
}).catch((error) => console.log("Erro ao conectar no banco: "+error))





// Routes
const routes = require("./routes/router");

app.use('/api', routes);

