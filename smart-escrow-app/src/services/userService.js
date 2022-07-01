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