const {DataTypes} = require("sequelize");
const sequelize = require("../database");

const Artista = sequelize.define ("Artistas", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Artista;