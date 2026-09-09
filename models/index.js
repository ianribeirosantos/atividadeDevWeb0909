const Artista = require("./Artista");
const Album = require("./Album");
const Genero = require("./Genero");
const AlbumGenero = require("./AlbumGenero");

// 1:N

Artista.hasMany(Album, {
    foreignKey: "artistaId",
    as: "albuns"
});

Album.belongsTo(Artista, {
    foreignKey: "artistaId",
    as: "artista"
});


// N:N

Album.belongsToMany(Genero, {
    through: AlbumGenero,
    foreignKey: "albumId",
    otherKey: "generoId",
    as: "generos"
});

Genero.belongsToMany(Album, {
    through: AlbumGenero,
    foreignKey: "generoId",
    otherKey: "albumId",
    as: "albuns"
});


module.exports = {
    Artista,
    Album,
    Genero,
    AlbumGenero
};