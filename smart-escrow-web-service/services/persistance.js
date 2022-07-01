import { 
  getUserByEmail,
  getUserById, 
  createUser, 
  updateUserPassword,
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
  updateUserPassword,
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