import axios from 'axios';
const draftUrl = 'http://localhost:4000/escrow';
const detailsUrl = 'http://localhost:4000/escrow-details';

export async function createEscrow(escrowName, escrowDescription, escrowPrice, expirationDate, expirationTime) {
  const requestData = {
    escrowName,
    escrowDescription,
    escrowPrice,
    expirationDate,
    expirationTime
  };

  try {
    const response = await axios.post(draftUrl, requestData);
    return {
      status: response.status,
      escrowId: response.data.escrowId
    };
  }
  catch(e) {
    return {
      status: 500,
      escrowId: 0
    };
  }
}

export async function addEscrowDetails(id, routes) {
  const requestData = {
    id,
    routes
  };

  try {
    const response = await axios.post(detailsUrl, requestData);
    return {
      status: response.status,
      escrowId: response.data.escrowId
    }
  }
  catch {
    return {
      status: 500,
      escrowId: 0
    };
  }
}