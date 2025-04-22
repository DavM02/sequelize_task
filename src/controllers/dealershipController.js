import DealershipService from '../services/DealershipService.js';

class DealershipController {
      async createDealership(req, res) {
        const { name, address, description } = req.body;
        try {
            const dealership = await DealershipService.createDealership(name, address, description);
            res.status(201).json(dealership);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

      async addUserToDealership(req, res) {
        const { dealership_id, user_id } = req.body;
        try {
            const user = await DealershipService.addUserToDealership(dealership_id, user_id);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

      async getAllDealerships(req, res) {
        try {
            const dealerships = await DealershipService.getAllDealerships();
            res.status(200).json(dealerships);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
      }
    
    async getDealershipDetails(req, res) {
        const dealershipId = req.params.id;
        try {
            
            const dealership = await DealershipService.getDealershipDetails(dealershipId);
            res.status(200).json(dealership);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new DealershipController();
