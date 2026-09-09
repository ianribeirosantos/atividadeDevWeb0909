const express = require("express");

const router = express.Router();

const { Genero } = require("../models");

// LISTAR GÊNEROS

router.get("/", async (req, res) => {

    const generos = await Genero.findAll({
        order: [["nome", "ASC"]]
    });

    res.render("generos/lista", {
        generos: generos.map(genero => genero.toJSON())
    });

});

// TELA DE CADASTRO

router.get("/cadastro", (req, res) => {

    res.render("generos/cadastro");

});

// CADASTRAR GÊNERO

router.post("/", async (req, res) => {

    const { nome } = req.body;

    await Genero.create({
        nome
    });

    res.redirect("/generos");

});

module.exports = router;