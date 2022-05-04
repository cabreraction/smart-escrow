const express = require('express');
const Web3 = require('web3');
const app = express();
const port = 3000;

// let web3 = new Web3('http://127.0.0.1:7545');
// console.log(web3)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
