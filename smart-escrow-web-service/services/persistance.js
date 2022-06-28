import { 
  getUserByEmail,
  getUserById, 
  createUser, 
  createEscrowDraft,
  getEscrowById,
  updateEscrowRoutes,
  updateEscrowValidations,
  updateEscrowCode,
  getEscrowsByOwnerId,
  getEscrowByCode,
  addDeveloperToEscrow
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
  getEscrowsByOwnerId,
  getEscrowByCode,
  addDeveloperToEscrow
}

export default persistanceApi;