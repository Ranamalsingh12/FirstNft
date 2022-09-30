require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: {
    rinkeby: {
      url:process.env.ALCHMEY_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
