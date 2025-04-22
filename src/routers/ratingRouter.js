import express from 'express';
import RatingController from '../controllers/ratingController.js';

const ratingRouter = express.Router();

ratingRouter.post('/', RatingController.createRating);

export default ratingRouter;
