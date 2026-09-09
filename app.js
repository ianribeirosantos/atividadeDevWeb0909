const express = require("express");
const { engine } = require("express-handlebars");

const sequelize = require("./database");

require("./models");

const app = express();


// CONFIGURAÇÃO DO HANDLEBARS

app.engine("handlebars", engine({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");


// MIDDLEWARE

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static("public"));


// PÁGINA INICIAL

app.get("/", (req, res) => {

    res.render("home");

});


// ROTAS

const artistasRoutes = require("./routes/artistas");
const albunsRoutes = require("./routes/albuns");
const generosRoutes = require("./routes/generos");

app.use("/artistas", artistasRoutes);
app.use("/albuns", albunsRoutes);
app.use("/generos", generosRoutes);


// BANCO DE DADOS

sequelize.sync()
    .then(() => {

        console.log("bd conectado.");

        app.listen(3000, () => {

            console.log("rodando no 3000");

        });

    })
    .catch((erro) => {

        console.error("erro:", erro);

    });