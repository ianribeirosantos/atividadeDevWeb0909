const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Album = sequelize.define("Album", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    anoLancamento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    artistaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Album;