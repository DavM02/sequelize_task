import CarService from "../services/CarService.js";

class CarController {
      async addCarToDealership(req, res) {
        const { model, dealership_id } = req.body;
        try {
            const car = await CarService.addCarToDealership(model, dealership_id);
            res.status(201).json(car);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

      async addFeatureToCar(req, res) {
        const { car_id, feature_id } = req.body;
        try {
            const carFeature = await CarService.addFeatureToCar(car_id, feature_id);
            res.status(201).json(carFeature);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

      async removeFeatureFromCar(req, res) {
        const { car_id, feature_id } = req.body;
        try {
            const carFeature = await CarService.removeFeatureFromCar(car_id, feature_id);
            res.status(200).json(carFeature);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new CarController();
