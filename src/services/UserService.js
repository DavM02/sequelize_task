import User from "../models/user.js";

class UserService {
  async createUser(name, email) {
    const user = await User.create({ name, email });
    return user;
  }

  async getUserById(user_id) {
    const user = await User.findByPk(user_id);
    return user;
  }

  async getAllUsers() {
    const users = await User.findAll();
    return users;
  }
}

export default new UserService();
