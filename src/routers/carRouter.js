import express from 'express';
import CarController from '../controllers/carController.js';

const carRouter = express.Router();

carRouter.post('/add', CarController.addCarToDealership);
carRouter.post('/feature/add', CarController.addFeatureToCar);
carRouter.post('/feature/remove', CarController.removeFeatureFromCar);

export default carRouter;
