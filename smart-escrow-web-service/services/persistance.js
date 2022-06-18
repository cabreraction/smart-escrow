import { 
  getUserByEmail,
  getUserById, 
  createUser, 
  createEscrowDraft,
  getEscrowById,
  updateEscrowRoutes
} from "./implementations/simple_storage/api.js";

const persistanceApi = {
  getUserByEmail,
  getUserById,
  createUser,
  createEscrowDraft,
  getEscrowById,
  updateEscrowRoutes
}

export default persistanceApi;