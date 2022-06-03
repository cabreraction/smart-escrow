import axios from 'axios';
const url = 'http://localhost:4000/escrow';

export async function createEscrow(escrowName, escrowDescription, escrowPrice, expirationDate, expirationTime) {
  const requestData = {
    escrowName,
    escrowDescription,
    escrowPrice,
    expirationDate,
    expirationTime
  }

  try {
    const response = await axios.post(url, requestData);
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