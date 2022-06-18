import persistance from '../services/persistance.js'
const { getUserByEmail } = persistance;

export function signup(req, res) {
    const { email, walletAddres, userType, password } = req.body;

    getUserByEmail();
    // verify the user doesnt exists already
    // create the user

    res.status(200).send({ operationStatus: 'ok' })
}