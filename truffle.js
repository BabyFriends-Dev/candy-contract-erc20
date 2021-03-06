const fs = require("fs");


let privateKey = fs
  .readFileSync(".secret_" + process.env.NETWORK)
  .toString()
  .trim();

const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKeys = [privateKey]; // private keys

const providerFactory4Ethereum = new HDWalletProvider(
  privKeys,
  `https://${process.env.NETWORK}.infura.io/v3/${process.env.INFURA_API_KEY}` // Provider URL => web3.HttpProvider
);

module.exports = {
  networks: {
    /**
     * Ethereum Network
     */
    mainnet: {
      provider: providerFactory4Ethereum,
      network_id: 1,
      gas: 6721975,
      gasPrice: 100000000000, // 100 Gwei, Change this value according to price average of the deployment time
    },
    ropsten: {
      provider: providerFactory4Ethereum,
      network_id: 3,
      gas: 6000000,
      gasPrice: 100000000000, // 50 Gwei
    },
    // 'rinkeby': {
    //   provider: providerFactory4Ethereum('rinkeby'),
    //   network_id: 4,
    //   gas: 6000000,
    //   gasPrice: 50000000000 // 50 Gwei
    // },
    // 'kovan': {
    //   provider: providerFactory4Ethereum('kovan'),
    //   network_id: 42,
    //   gas: 6000000,
    //   gasPrice: 50000000000  // 50 Gwei
    // },

  },
  compilers: {
    solc: {
      version: "^0.6.10",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  mocha: {
    useColors: true,
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 21,
    },
  },
};
