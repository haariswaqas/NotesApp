// models/note.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Note = sequelize.define('Note', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    timestamps: true,
    underscored: true, // This ensures all auto-generated fields use underscores
});

module.exports = Note;