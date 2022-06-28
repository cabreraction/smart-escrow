import express from 'express';
import cors from 'cors';

import { signup } from './controllers/signup.js';
import { login } from './controllers/login.js';
import { 
  createEscrow, 
  addEscrowDetails, 
  getEscrow, 
  addEscrowValidations,
  getOwnerEscrows,
  getEscrowByCode,
  acceptEscrow 
} from './controllers/escrow.js';

const port = 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Controllers - User
app.post('/signup', signup);
app.post('/login', login);

// Controllers - Escrow - POST
app.post('/escrow', createEscrow);
app.post('/escrow-details', addEscrowDetails);
app.post('/escrow-validations', addEscrowValidations);
app.post('/escrow/accept-escrow', acceptEscrow);

// Controllers - Escrow - GET
app.get('/escrow/:id', getEscrow);
app.get('/escrow/owner/:id', getOwnerEscrows);
app.get('/escrow/code/:code', getEscrowByCode);

app.listen(port, () => {
  console.log(`Smart Escrow listening on port ${port}`);
});
