const Web3 = require('web3');
const fs = require('fs');
require('dotenv').config()

const compiledSmartContract = JSON.parse(fs.readFileSync('CompiledSmartEscrow.json').toString());
const bytecode = compiledSmartContract.contracts['SmartEscrow.sol']['SmartEscrow']['evm']['bytecode']['object'];
const abi = compiledSmartContract.contracts['SmartEscrow.sol']['SmartEscrow']['abi'];

const web3 = new Web3('http://127.0.0.1:7545');
const chainId = 5777;
const ownerAddress = process.env.OWNER_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;

const SmartEscrow = new web3.eth.Contract(abi);
const firstTransaction = SmartEscrow.deploy({ data: bytecode });
firstTransaction.send({
    from: ownerAddress,
    chainId: chainId,
    gas: 1500000,
    gasPrice: '30000000000000'
});

// web3.eth.getGasPrice().then(res => console.log(res))