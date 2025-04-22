import UserService from "../services/UserService.js";

class UserController {
      async createUser(req, res) {
        const { name, email } = req.body;
        try {
            const user = await UserService.createUser(name, email);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
      }
    
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);   
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new UserController();
