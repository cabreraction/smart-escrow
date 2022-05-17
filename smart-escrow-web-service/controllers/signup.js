exports.signup = function signup(req, res) {
    const { email, walletAddres, userType, password } = req.body;

    // verify the user doesnt exists already
    // create the user

    res.status(200).send({ operationStatus: 'ok' })
}