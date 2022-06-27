import axios from 'axios';
const url = 'http://localhost:4000/login';

export async function login(email, password) {
    const requestData = {
        email,
        password
    }

    const response = await axios.post(url, requestData);
    return {
        status: response.status,
        id: response.data.id,
        type: response.data.type
    };
}