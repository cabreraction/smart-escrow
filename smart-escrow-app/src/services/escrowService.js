import axios from 'axios';
const draftUrl = 'http://localhost:4000/escrow';
const detailsUrl = 'http://localhost:4000/escrow-details';
const baseUrl = 'http://localhost:4000/escrow/';


export async function createEscrow(escrowName, escrowDescription, escrowPrice, expirationDate, expirationTime) {
  const userId = localStorage.getItem('user');
  const requestData = {
    escrowName,
    escrowDescription,
    escrowPrice,
    expirationDate,
    expirationTime,
    userId
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

export async function getEscrow(id) {
  try {
    const response = await axios.get(`${baseUrl}${id}`);
    return {
      status: response.status,
      escrow: response.data
    }
  }
  catch (e) {
    console.error(e);
    return {
      status: 404,
      escrow: null
    }
  }
}