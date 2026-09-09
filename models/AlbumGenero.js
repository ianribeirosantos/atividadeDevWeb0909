const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const AlbumGenero = sequelize.define("AlbumGenero", {
    albumId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    generoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = AlbumGenero;