import { v4 as uuidv4 } from 'uuid';

import persistance from '../services/persistance.js'
const { getUserByEmail, createUser } = persistance;

export function signup(req, res) {
    const { email, walletAddress, userType, password } = req.body;
    const user = getUserByEmail(email);
    if (user) {
        res.status(500).send({ operationStatus: 'failed', errorMessage: 'Ya existe un usuario asociado a esa cuenta de correo electrónico.' });
        return;
    }
    
    const id = uuidv4();
    const userCreated = createUser({ id, email, walletAddress, userType, password });
    if (!userCreated) {
        res.status(500).send({ operationStatus: 'failed', errorMessage: 'Ha ocurrido un error. Por favor intente de nuevo en un momento.' });
        return;
    }

    res.status(200).send({ operationStatus: 'ok', id: id });
}