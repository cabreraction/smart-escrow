import express from 'express';
import cors from 'cors';

import { signup } from './controllers/signup.js';
import { login } from './controllers/login.js';
import { createEscrow, addEscrowDetails } from './controllers/escrow.js';

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

// Controllers - Escrow
app.post('/escrow', createEscrow);
app.post('/escrow-details', addEscrowDetails);

app.listen(port, () => {
  console.log(`Smart Escrow listening on port ${port}`);
});
