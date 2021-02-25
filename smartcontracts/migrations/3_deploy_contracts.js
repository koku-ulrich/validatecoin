const Migrations = artifacts.require("Migrations");
const Tokens = artifacts.require("./Tokens.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Tokens);
};