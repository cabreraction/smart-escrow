// SPDX-License-Identifier: MIT

pragma solidity >= 0.6.0 < 0.9.0;

contract SmartEscrow {
    address public owner;
    uint256 private managementToken;

    constructor() {
        owner = msg.sender;
        managementToken = 123456789;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    struct Escrow {
        address funder;
        address receiver;
        uint256 amount; // in eth
        bool released;
        uint256 code;
    }

    Escrow[] private escrows;
    mapping(uint256 => uint256) private codeToIndex;

    function registerEscrow(address _funder, uint256 _amount, uint256 _code) public {
        uint256 currentIndex = escrows.length;
        codeToIndex[_code] = currentIndex;

        escrows.push(Escrow({
            funder: _funder,
            receiver: address(0),
            amount: _amount,
            released: false,
            code: _code
        }));
    }

    function initiateEscrow(address _receiver, uint256 _code) public payable {
        uint256 index = codeToIndex[_code];
        // TODO - validate correct amount
        escrows[index].receiver = _receiver;
    }

    function releaseFunds(uint256 _token, uint256 _code) public payable{
        require(_token == managementToken);
        uint256 index = codeToIndex[_code];
        Escrow memory escrow = escrows[index];
        require(escrow.released == false);
        address payable receiver = payable(escrow.receiver);
        uint256 amount = escrow.amount;
        receiver.transfer(amount);

        escrows[index].released = true;
    }
}