export function login(req, res) {
    const { email, password } = req.body;

    // verify the password and email match
    // get the user and send it back

    res.status(200).send({ user: {} })
}