const express = require("express");

const router = express.Router();

const { Artista } = require("../models");

// LISTAR ARTISTAS

router.get("/", async (req, res) => {

    const artistas = await Artista.findAll({
        order: [["nome", "ASC"]]
    });

    res.render("artistas/lista", {
        artistas: artistas.map(artista => artista.toJSON())
    });

});

// TELA DE CADASTRO

router.get("/cadastro", (req, res) => {

    res.render("artistas/cadastro");

});

// CADASTRAR ARTISTA

router.post("/", async (req, res) => {

    const { nome, pais } = req.body;

    await Artista.create({
        nome,
        pais
    });

    res.redirect("/artistas");

});

module.exports = router;