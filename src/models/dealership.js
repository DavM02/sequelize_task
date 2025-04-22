import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Dealership = sequelize.define('dealership', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
}, {
    paranoid: true, 
    timestamps: false,
});
 

export default Dealership;
