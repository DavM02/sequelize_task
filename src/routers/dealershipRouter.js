import express from 'express';
import DealershipController from '../controllers/dealershipController.js';

const DealershipRouter = express.Router();

DealershipRouter.post('/', DealershipController.createDealership);
DealershipRouter.post('/user/add', DealershipController.addUserToDealership);
DealershipRouter.get('/', DealershipController.getAllDealerships);
DealershipRouter.get('/details/:id', DealershipController.getDealershipDetails);

export default DealershipRouter;
