import Car from '../models/car.js';
import CarFeatures from '../models/carFeatures.js';

class CarService {
    async addCarToDealership(model, dealership_id) {
        const car = await Car.create({ model, dealership_id });
        return car;
    }

    async addFeatureToCar(car_id, feature_id) {
        const carFeature = await CarFeatures.create({ car_id, feature_id });
        return carFeature;
    }

    async removeFeatureFromCar(car_id, feature_id) {
        const carFeature = await CarFeatures.destroy({ where: { car_id, feature_id } });
        return carFeature;
    }

    async getAllCars() {
        const cars = await Car.findAll();
        return cars;
    }
}

export default new CarService();
