pragma solidity ^0.5.2;

import "./Ownable.sol";
import "./Dispatcher.sol";

contract Voting is Ownable {
  struct Vote {
    uint8 id;
    string title;
    uint64[] items;
    uint32 createdate;
  }

  Dispatcher dispatcher;

  uint8 public currenVoteNumber;
  uint32[] private voteIndex;
  mapping(uint64 => Vote) public votes;

  mapping(bytes32 => uint8) public votesReceived;
  mapping (address => uint256) public usersList;
  bytes32[] public optionsList;

  // constructor(address _dispAddress) public payable {
  //     currenVoteNumber = 0;
  //     dispatcher = Dispatcher(_dispAddress);
  //     dispatcher.setContractImplementation("Voting", address(this));
  // }

  function createNewVoting(string memory title, uint64[] memory items) public {
    Vote memory vote;
    currenVoteNumber++;
    vote.id = currenVoteNumber;
    vote.title = title;
    vote.items = items;
    votes[currenVoteNumber] = vote;
    voteIndex.push(currenVoteNumber);
  }

//  function getVotingById(uint8 _id) public view returns(uint) {
//    return votes[_id];
//  }

  function getVoteIds() public view returns(uint32[] memory data) {
    return voteIndex;
  }

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
