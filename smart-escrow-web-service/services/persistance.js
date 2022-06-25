import { 
  getUserByEmail,
  getUserById, 
  createUser, 
  createEscrowDraft,
  getEscrowById,
  updateEscrowRoutes,
  updateEscrowValidations,
  updateEscrowCode
} from "./implementations/simple_storage/api.js";

const persistanceApi = {
  getUserByEmail,
  getUserById,
  createUser,
  createEscrowDraft,
  getEscrowById,
  updateEscrowRoutes,
  updateEscrowValidations,
  updateEscrowCode
}

export default persistanceApi;