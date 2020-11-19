const CandyToken = artifacts.require("./CandyToken.sol");
// const CandyCrowdsale = artifacts.require("./CandyCrowdsale.sol");
// const CandyAirdrop = artifacts.require("./CandyAirdrop.sol");


// TODO: Change this parameters in mainnet deployment
const rate = 21935; // 1 ETH = 21,935.9375 CANDY token
const totalSaleCap = 2279 * Math.pow(10, 18); // 2,279.36463 ETH
const wallet = process.env.FUND_COLLECTOR_ADDRESS;

/************* CANDY Token deployed information ***************/

// Mainnet - Ethereum
// @see https://etherscan.io/token/0x540d3087b21f31f9a810385c94627a067cfd0b08
const CANDY_TOKEN_ADDRESS_MAINNET =
  "0x540d3087b21f31f9a810385c94627a067cfd0b08";


// Deployer
const TokenContractDeployer = (deployer, network) => {
  if (
    network === "ropsten" ||
    network === "baobab" || // TestNet
    network === "mainnet" ||
    network === "cypress"
  ) {
    // MainNet
    deployer
      .deploy(CandyToken)
      .then((_) =>
        console.log(
          "CANDY Token contract has been deployed successfully. CandyToken.address =" +
          CandyToken.address
        )
      );
  } else {
    throw new Error("Unknown network!");
  }
};

/*************************************************************/

/************* CANDY Crowdsale deployed information ***************/

// Mainnet - Ethereum
// @see https://etherscan.io/0x
// const CANDY_CROWDSALE_ADDRESS = '';

// Ropsten - Ethereum
// @see https://rinkeby.etherscan.io/0xb0eb24ce9b029a9e771a7878c7983e1d06f5895d
// const CANDY_CROWDSALE_ADDRESS = '0xe9b029a9e771a7878c7983e1d06f5895db0eb24c';

// Baobab - Klaytn
// const CANDY_CROWDSALE_ADDRESS = '0x69f75e30ee83a450b033fd6451fd7993051bb19c';

// Deployer
// const SaleContractDeployer = (deployer, network) => {
//   deployer
//     .deploy(
//       CandyCrowdsale,
//       rate,
//       wallet,
//       getTokenAddress(network),
//       totalSaleCap
//     )
//     .then((_) =>
//       console.log(
//         `CANDY Crowdsale contract has been deployed successfully on ${network}.`
//       )
//     );
// };

// function getTokenAddress(network) {
//   switch (network) {
//     case "mainnet":
//       return CANDY_TOKEN_ADDRESS_MAINNET;
//     case "ropsten":
//       return CANDY_TOKEN_ADDRESS_ROPSTEN;
//     case "baobab":
//       return CANDY_TOKEN_ADDRESS_BAOBAB;
//     case "cypress":
//       return CANDY_TOKEN_ADDRESS_CYPRESS;
//     default:
//       throw new Error("Unknown network!");
//   }
// }

/************* CANDY Airdrop deployed information ***************/

// mainnet
// const CANDY_AIRDROP_ADDRESS = '0x84b148d389a94bf97abba8bf04bc4b0f33355418';

// Deployer
// const AirdropContractDeployer = (deployer, network) => {
//   deployer
//     .deploy(CandyAirdrop, getTokenAddress(network))
//     .then((_) =>
//       console.log(
//         `CANDY Airdrop contract has been deployed successfully on ${network}.`
//       )
//     );
// };

/*****************************************************************/

module.exports = (deployer, network) => {
  /**
   * Token contract deploy.
   */
  TokenContractDeployer(deployer, network);

  /**
   * Sale contract deploy.
   */
  // SaleContractDeployer(deployer, network);

  /**
   * Sale contract deploy.
   */
  // AirdropContractDeployer(deployer, network);
};
