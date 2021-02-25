const fs = require('fs');
const solc = require('solc');

const content = fs.readFileSync('../contracts/Tokens.sol');
const input = {'Tokens.sol': content.toString()};
const output = solc.compile({sources: input}, 1);