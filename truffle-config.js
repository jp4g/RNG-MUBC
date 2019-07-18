require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");

/**
 * @author Jack Gilcrest
 * @date 07.17.2019
 * Configuration for truffle deployment of RNG Game Smart Contracts
 */
module.exports = {
  networks: {
    mainnet: {
      provider: () => { return new HDWalletProvider(process.env.MNEMONIC, process.env.API_MAINNET) },
      network_id: 1,
      confirmations: 2,
    },
    ropsten: {
      provider: () => { return new HDWalletProvider(process.env.MNEMONIC, process.env.API_ROPSTEN) },
      network_id: 3,
      confirmations: 2,
    },
    rinkeby: {
      provider: () => { return new HDWalletProvider(process.env.MNEMONIC, process.env.API_RINKEBY) },
      network_id: 4,
      confirmations: 2,
    },
    kovan: {
      provider: () => { return new HDWalletProvider(process.env.MNEMONIC, process.env.API_KOVAN) },
      network_id: 42,
      confirmations: 2,
    },
    development: {
      provider: () => { return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:8545") },
      network_id: "*",
      gasLimit: 7000000
    }
  },
  mocha: {
    //timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.5.10",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
}