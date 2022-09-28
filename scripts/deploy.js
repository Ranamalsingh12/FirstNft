// ether.js comes with built in to hardhat.
// ether.js is a library to work with ethereum.

//Import ether

const { ethers } = require("hardhat");

async function main() {
  // 1.Somehow tell the script what we want to deploy -> the "NFTee.sol" contract.

  const contract = await ethers.getContractFactory("NFT");

  // 2. Deploy it 

  const deployContract = await contract.deploy();

  // wait for the contract to deploy
  await deployContract.deployed();
  // 3. Print the address of the deployed contract on eth scan

  console.log("NFT contract Deployed to ->",deployContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })