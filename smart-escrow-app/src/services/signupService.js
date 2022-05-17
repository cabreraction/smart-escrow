import axios from 'axios';
const url = 'http://localhost:4000/signup';

export async function signup(email, userType, walletAddress, password) {
    const requestData = {
        email,
        userType,
        walletAddress,
        password
    }

    console.log(requestData)

    const response = await axios.post(url, requestData);
    return response.status;
}

export async function mockSignup({email, userType, walletAddress, password}) {
    return 200;
}