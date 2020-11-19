// SPDX-License-Identifier: MIT

pragma solidity ^0.6.10;

import "openzeppelin-contracts-3.0.0/contracts/token/ERC20/ERC20.sol";

//ERC20("CRYPTO CANDY", "CANDY")
contract CryptoCandyToken is ERC20 {
    constructor (string memory name, string memory symbol)
        ERC20(name, symbol)
        public
    {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        _mint(msg.sender, 800000000 * (10**uint256(18)));
    }
}