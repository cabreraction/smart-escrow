const fs = require('fs');
const solc = require('solc');

const smartEscrowFileContent = fs.readFileSync('SmartEscrow.sol', 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'SmartEscrow.sol': {
      content: smartEscrowFileContent
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi', 'metadata', 'evm.bytecode', 'evm.sourceMap']
      }
    }
  }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
fs.writeFileSync('CompiledSmartEscrow.json', JSON.stringify(output));