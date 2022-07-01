import axios from 'axios';
const baseUrl = 'http://localhost:4000/user/';

export async function getUser(id) {
  try {
    const response = await axios.get(`${baseUrl}${id}`);
    return {
      status: response.status,
      user: response.data
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

export async function updatePassword(id, oldPassword, newPassword) {
  const requestData = {
    id, 
    oldPassword, 
    newPassword
  };

  try {
    const response = await axios.put(`${baseUrl}password`, requestData);
    return {
      status: response.status,
      operationStatus: response.data.operationStatus
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