import persistance from '../services/persistance.js'
const { getUserByEmail } = persistance;

export function login(req, res) {
    const { email, password } = req.body;

    const user = getUserByEmail(email);
    if (!user) {
        res.status(500).send({ operationStatus: 'failed', errorMessage: 'No existe un usuario con ese correo electrónico en la base de datos' });
        return;
    }
    if (password !== user.password) {
        res.status(500).send({ operationStatus: 'failed', errorMessage: 'Los datos ingresados son incorrectos' });
        return;
    }

    res.status(200).send({ operationStatus: 'ok', id: user.id, type: user.userType });
}