import Car from './car.js';
import Dealership from './dealership.js';
import Feature from './Feature.js';
import Rating from './rating.js';
import User from './user.js';

 
Car.belongsTo(Dealership, { foreignKey: 'dealership_id' });
Dealership.hasMany(Car, { foreignKey: 'dealership_id' });


User.belongsTo(Dealership, { foreignKey: 'dealership_id' });
Dealership.hasMany(User, { foreignKey: 'dealership_id' });

Car.belongsToMany(Feature, { through: "carFeatures", foreignKey: 'car_id', timestamps: false });
Feature.belongsToMany(Car, { through: "carFeatures", foreignKey: 'feature_id', timestamps: false });
 
Car.hasMany(Rating, { foreignKey: 'car_id' })
Rating.belongsTo(Car, { foreignKey: 'car_id' });
Rating.belongsTo(User, { foreignKey: 'user_id' });
 
console.log('assos', Car.associations);
console.log(Rating.associations);
