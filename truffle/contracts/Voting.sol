pragma solidity ^0.5.2;

import "./Ownable.sol";

contract Voting is Ownable {

  mapping(bytes32 => uint8) public votesReceived;
  mapping (address => uint256) public usersList;
  bytes32[] public optionsList;

  function makeVote(bytes32[] memory options) public {
    optionsList = options;
  }

  function totalVotesFor(bytes32 item) view public returns (uint8) {
    require(validItem(item));
    return votesReceived[item];
  }

  function validItem(bytes32 item) view public returns (bool) {
    for (uint i = 0; i < optionsList.length; i++) {
      if (optionsList[i] == item) {
        return true;
      }
    }
    return false;
  }

  function voteForItem(bytes32 item) public {
    require(validItem(item));
    votesReceived[item] += 1;
  }
}
