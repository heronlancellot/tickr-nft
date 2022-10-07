// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Tickr is ERC721, Ownable {
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}
    address ownerNFT;

    function safeMint(address to, uint256 tokenId)
        public
        onlyOwner
    {
        _safeMint(to, tokenId);
    }


    function buyTicket(address buyer, address seller) public{
        //In this fuction you will buy the ticket and receive the NFT
    }

    function sellTicket() public {
        // Take the ticket, Be NFT, Transaction at same time. 

    }

}
