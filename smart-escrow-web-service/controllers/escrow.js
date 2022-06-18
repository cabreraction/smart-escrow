import { v4 as uuidv4 } from 'uuid';

import persistance from '../services/persistance.js';
const { createEscrowDraft, updateEscrowRoutes, getEscrowById } = persistance;

export function createEscrow(req, res) {
  const { escrowName, expirationDate, expirationTime, escrowPrice, escrowDescription, userId } = req.body;

  const id = uuidv4();
  const draft = {
    id,
    name: escrowName,
    expirationDate, 
    expirationTime,
    price: escrowPrice, 
    description: escrowDescription,
    userId,
    routes: [],
    validations: [],
    status: 'drafted'
  };
  createEscrowDraft(draft);

  res.status(200).send({ escrowId: id });
}

export function addEscrowDetails(req, res) {
  const { id, routes } = req.body;
  const result = updateEscrowRoutes(id, routes);

  if (!result) {
    res.status(500).send({ operationStatus: 'failed', errorMessage: 'Ha ocurrido un error, vuelva a intentar mas tarde', escrowId: -1 });
    return
  }

  res.status(200).send({ escrowId: id });
}

export function addRouteValidations(req, res) {
    
}

export function getEscrow(req, res) {
  const { id } = req.params;
  let escrow = getEscrowById(id);

  if (escrow) {
    res.status(200).send(escrow);
  } else {
    res.status(404).send(null);
  }
}