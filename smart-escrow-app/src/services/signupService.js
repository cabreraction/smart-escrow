import axios from 'axios';
const url = 'http://localhost:4000/signup';

export async function signup(email, userType, walletAddress, password) {
    const requestData = {
        email,
        userType,
        walletAddress,
        password
    }

    const response = await axios.post(url, requestData);
    return {
        status: response.status,
        id: response.data.id,
        type: response.data.type
    };
}