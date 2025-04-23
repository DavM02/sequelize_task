import User from "../models/user.js";
import Rating from "../models/rating.js";
import Dealership from "../models/dealership.js";
import sequelize from "../config/db.js";
import Car from "../models/car.js";
import Feature from "../models/feature.js";
class DealershipService {
    async createDealership(name, address, description) {
        const dealership = await Dealership.create({ name, address, description });
        return dealership;
    }

    async addUserToDealership(dealership_id, user_id) {
        const user = await User.update(
            { dealership_id },
            { where: { id: user_id } }
        );
        return user;
    }

    async getAllDealerships() {
        const dealerships = await Dealership.findAll({
            include: [
                {
                    model: Car,
                }
            ],
            attributes: {
                include: [
                    [sequelize.literal(`(SELECT COUNT(*) FROM cars WHERE cars.dealership_id = dealership.id)`), 'car_count']
                ]
            },
            order: [
                [sequelize.literal('car_count'), 'DESC']
            ]
        });

        return dealerships
    }


    async getDealershipDetails(dealershipId) {
        const dealership = await Dealership.findOne({
            where: { id: dealershipId },
            include: [
                {
                    model: Car,
                    attributes: {
                        exclude: ['dealership_id']  
                    },
                    include: [
                        {
                            model: Rating,
                            include: [
                                {
                                    model: User,
                                    attributes: ['id', 'name', 'email']  
                                }
                            ],
                            attributes: { exclude: ['car_id', 'user_id'] },  
                            required: false
                        },
                        {
                            model: Feature,
                            through: { attributes: [] },
                            required: false
                        }
                    ],
                    attributes: {
                        include: [
                            [
                                sequelize.literal(`(SELECT AVG(rate) FROM Ratings AS rating WHERE rating.car_id = cars.id)`),
                                'avg_rating'
                            ]
                        ]
                    }
                },
                {
                    model: User
                }
            ]
        });

        return dealership;
    }





}

export default new DealershipService();
