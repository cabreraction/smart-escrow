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
  addDeveloperToEscrow,
  getEscrowsByDeveloperId
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
  addDeveloperToEscrow,
  getEscrowsByDeveloperId
}

export default persistanceApi;