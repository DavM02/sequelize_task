import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Car = sequelize.define('car', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    model: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    dealership_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});

 

export default Car;
