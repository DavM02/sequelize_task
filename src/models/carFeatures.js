import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const CarFeatures = sequelize.define('carFeatures', {
    car_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'cars',
            key: 'id',
        }
    },
    feature_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'features',
            key: 'id',
        }
    },
}, {
    timestamps: false,
});

export default CarFeatures;
