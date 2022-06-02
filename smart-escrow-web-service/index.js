const express = require('express');
const cors = require('cors');

const signup = require('./controllers/signup').signup;
const login = require('./controllers/login').login;
const createEscrow = require('./controllers/escrow').createEscrow;

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

app.listen(port, () => {
  console.log(`Smart Escrow listening on port ${port}`);
});
