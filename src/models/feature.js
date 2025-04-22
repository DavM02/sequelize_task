import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Feature = sequelize.define('feature', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
}, {
    timestamps: false
});

export default Feature;
