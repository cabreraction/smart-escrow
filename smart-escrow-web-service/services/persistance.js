import { getUserByEmail, getUserById, createUser } from "./implementations/simple_storage/api.js";

const persistanceApi = {
  getUserByEmail,
  getUserById,
  createUser
}

export default persistanceApi;