// SPDX-License-Identifier: MIT

pragma solidity >= 0.6.0 < 0.9.0;

contract SmartEscrow {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    struct Transaction {
        address employer;
        address provider;
        uint256 amount;
        bool released;
        uint256 code;
    }

    Transaction[] private transactions;
    mapping(uint256 => uint256) private codeToIndex;

    function getOwnerAddress() public view returns(address) {
        return owner;
    }

    function getAddress() public view returns(address) {
        return address(this);
    }
}