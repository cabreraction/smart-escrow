import { v4 as uuidv4 } from 'uuid';
import ShortUniqueId from 'short-unique-id';

import persistance from '../services/persistance.js';
const { 
  createEscrowDraft, 
  updateEscrowRoutes, 
  getEscrowById, 
  updateEscrowValidations,
  updateEscrowCode,
  getEscrowsByOwnerId,
  getEscrowByCode: getEscrowByCodeFromPersistance,
  addDeveloperToEscrow,
  getEscrowsByDeveloperId
} = persistance;

export function createEscrow(req, res) {
  const { escrowName, expirationDate, expirationTime, escrowPrice, escrowDescription, ownerId } = req.body;

  const id = uuidv4();
  const draft = {
    id,
    name: escrowName,
    expirationDate, 
    expirationTime,
    price: escrowPrice, 
    description: escrowDescription,
    ownerId,
    routes: [],
    validations: [],
    status: 'drafted',
    code: '',
    developers: []
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

export function getEscrow(req, res) {
  const { id } = req.params;
  let escrow = getEscrowById(id);

  if (escrow) {
    res.status(200).send(escrow);
  } else {
    res.status(404).send(null);
  }
}

export function addEscrowValidations(req, res) {
  const { id, validations } = req.body;
  const result = updateEscrowValidations(id, validations);

  if (!result) {
    res.status(500).send({ operationStatus: 'failed', errorMessage: 'Ha ocurrido un error, vuelva a intentar mas tarde' });
    return
  }

  const uid = new ShortUniqueId({ length: 10 });
  const code = uid();
  const codeResult = updateEscrowCode(id, code)

  if (!codeResult) {
    res.status(500).send({ operationStatus: 'failed', errorMessage: 'Ha ocurrido un error, vuelva a intentar mas tarde'});
    return
  }

  res.status(200).send({ escrowCode: code });
}

export function getOwnerEscrows(req, res) {
  const { id } = req.params;
  let escrows = getEscrowsByOwnerId(id);

  res.status(200).send(escrows);
}

export function getDeveloperEscrows(req, res) {
  const { id } = req.params;
  let escrows = getEscrowsByDeveloperId(id);

  res.status(200).send(escrows);
}

export function getEscrowByCode(req, res) {
  const { code } = req.params;
  let escrow = getEscrowByCodeFromPersistance(code);

  if (escrow) {
    res.status(200).send(escrow);
  } else {
    res.status(404).send(null);
  }
}

export function acceptEscrow(req, res) {
  const { userId, escrowId } = req.body;
  const result = addDeveloperToEscrow(userId, escrowId);

  if (!result) {
    res.status(500).send({ operationStatus: 'failed', errorMessage: 'Ha ocurrido un error, vuelva a intentar mas tarde' });
    return
  }

  res.status(200).send({ operationStatus: 'succeded' });
}