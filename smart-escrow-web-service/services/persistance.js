import { 
  getUserByEmail,
  getUserById, 
  createUser, 
  createEscrowDraft,
  getEscrowById,
  updateEscrowRoutes,
  updateEscrowValidations,
  updateEscrowCode,
  getEscrowsByOwnerId
} from "./implementations/simple_storage/api.js";

const persistanceApi = {
  getUserByEmail,
  getUserById,
  createUser,
  createEscrowDraft,
  getEscrowById,
  updateEscrowRoutes,
  updateEscrowValidations,
  updateEscrowCode,
  getEscrowsByOwnerId
}

export default persistanceApi;