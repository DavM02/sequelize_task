import RatingService from '../services/ratingService.js';

class RatingController {
      async createRating(req, res) {
        const { car_id, user_id, rate } = req.body;
        try {
            const rating = await RatingService.createRating(car_id, user_id, rate);
            res.status(201).json(rating);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new RatingController();
