exports.createEscrow = function createEscrow(req, res) {
    const { escowName, expirationDate, expirationTime, escrowPrice, escrowDescription } = req.body;

    // save it along with creation date and time
    // get escrow id

    res.status(200).send({ escrowId: 0 })
}

exports.addInputNOutput = function addInputNOutput(req, res) {
    
}