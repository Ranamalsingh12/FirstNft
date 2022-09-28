// SPDX-License-Identifier: MIT

// Telling Ethereum which solidity version to use when running this code 
pragma solidity ^0.8.4;

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


// contract NFTee is an ERC721 contract 
contract NFTee is ERC721{
    constructor() ERC721("MyFirstNFT","LRN-NFT"){

    }
}