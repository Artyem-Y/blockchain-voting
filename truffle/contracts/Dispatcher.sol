pragma solidity ^0.5.2;

import "./Ownable.sol";

contract Dispatcher is Ownable {
  mapping(bytes32 => uint8) private versions;
  mapping(bytes32 => address) private implementations;
  mapping(address => bool) public allowedContracts;

  modifier onlyAllowedContracts() {
    require(allowedContracts[msg.sender], "not allowed");
    _;
  }

  function setContractImplementation(string memory _name, address _anAddress) public {
    bytes32 key = keccak256(abi.encodePacked(_name));
    implementations[key] = _anAddress;
    versions[key] = versions[key]++;
    allowedContracts[_anAddress] = true;
  }

  function getContractByName(string memory _name) public view returns (address _impl) {
    bytes32 key = keccak256(abi.encodePacked(_name));
    _impl = implementations[key];
  }
}
