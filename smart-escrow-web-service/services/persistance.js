import { getUserByEmail, getUserById, createUser, createEscrowDraft } from "./implementations/simple_storage/api.js";

const persistanceApi = {
  getUserByEmail,
  getUserById,
  createUser,
  createEscrowDraft
}

export default persistanceApi;