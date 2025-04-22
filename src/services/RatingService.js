import Rating from "../models/rating.js";
class RatingService {
      async createRating(car_id, user_id, rate) {
        const rating = await Rating.create({ car_id, user_id, rate });
        return rating;
    }

      async getRatingsByCar(car_id) {
        const ratings = await Rating.findAll({ where: { car_id } });
        return ratings;
    }
}

export default new RatingService();
