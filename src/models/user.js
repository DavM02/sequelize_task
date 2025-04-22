import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    dealership_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'dealerships',
            key: 'id'
        }
    }
}, {
    timestamps: false,
});

export default User;
