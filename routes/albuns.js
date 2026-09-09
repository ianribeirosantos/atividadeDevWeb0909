const express = require("express");

const router = express.Router();

const {
    Album,
    Artista,
    Genero,
    AlbumGenero
} = require("../models");

// LISTAR ÁLBUNS

router.get("/", async (req, res) => {

    const albuns = await Album.findAll({

        include: [

            {
                model: Artista,
                as: "artista"
            },

            {
                model: Genero,
                as: "generos"
            }

        ],

        order: [["titulo", "ASC"]]

    });

    console.log(JSON.stringify(albuns, null, 2));

    res.render("albuns/lista", {

        albuns: albuns.map(album => album.toJSON())

    });

});

// TELA DE CADASTRO

router.get("/cadastro", async (req, res) => {

    const artistas = await Artista.findAll({

        order: [["nome", "ASC"]]

    });

    const generos = await Genero.findAll({

        order: [["nome", "ASC"]]

    });

    res.render("albuns/cadastro", {

        artistas: artistas.map(artista => artista.toJSON()),

        generos: generos.map(genero => genero.toJSON())

    });

});

// CADASTRAR ÁLBUM

router.post("/", async (req, res) => {

    const {
        titulo,
        anoLancamento,
        artistaId,
        generos
    } = req.body;

    const album = await Album.create({

        titulo: titulo,

        anoLancamento: anoLancamento,

        artistaId: artistaId

    });

    if (generos) {

        const listaGeneros = Array.isArray(generos)
            ? generos
            : [generos];

        for (const generoId of listaGeneros) {

            await AlbumGenero.create({

                albumId: album.id,

                generoId: generoId

            });

        }

    }

    res.redirect("/albuns");

});

module.exports = router;