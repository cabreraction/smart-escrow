import { v4 as uuidv4 } from 'uuid';

import persistance from '../services/persistance.js';
const { createEscrowDraft } = persistance;

export function createEscrow(req, res) {
  const { escrowName, expirationDate, expirationTime, escrowPrice, escrowDescription, userId } = req.body;

  const id = uuidv4();
  const draft = {
    name: escrowName,
    expirationDate, 
    expirationTime,
    price: escrowPrice, 
    description: escrowDescription,
    userId,
    routes: [],
    validations: []
  };
  createEscrowDraft(draft);

  res.status(200).send({ escrowId: id });
}

export function addEscrowDetails(req, res) {
  const { id, routes, userId } = req.body;
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