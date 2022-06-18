export function createEscrow(req, res) {
  const { escowName, expirationDate, expirationTime, escrowPrice, escrowDescription } = req.body;

  // save it along with creation date and time
  // get escrow id

  res.status(200).send({ escrowId: 0 });
}

export function addEscrowDetails(req, res) {
  const { id, routes } = req.body;
  const escrow = findEscrowById(id);

  if (!escrow) {
    res.status(404).send({ escrowId: -1 });
  }

  // save escrow to database
  res.status(200).send({ escrowId: 0 });
}

export function addRouteValidations(req, res) {
    
}

export function getEscrow(req, res) {
  const { id } = req.body;

  // look for the escrow in the database
  let escrow = null;
  if (escrow) {
    res.status(200).send(escrow);
  } else {
    res.status(404).send(null);
  }
}

function findEscrowById(id) {
  return null;
}