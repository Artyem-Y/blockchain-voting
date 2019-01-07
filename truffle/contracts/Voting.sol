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

  uint8 public currentVoteNumber;
  uint32[] private voteIndex;
  mapping(uint64 => Vote) public votes;
  mapping(uint64 => mapping(uint64 => uint8)) votesReceived;
  uint64[] public voteList;

  // constructor(address _dispAddress) public payable {
  //     currenVoteNumber = 0;
  //     dispatcher = Dispatcher(_dispAddress);
  //     dispatcher.setContractImplementation("Voting", address(this));
  // }

  function createNewVoting(string memory title, uint64[] memory items) public {
    Vote memory vote;
    currentVoteNumber++;
    vote.id = currentVoteNumber;
    vote.title = title;
    vote.items = items;
    votes[currentVoteNumber] = vote;
    voteIndex.push(currentVoteNumber);
  }

  function getVotingById(uint8 _id) public view returns(uint8 id, string memory title, uint64[] memory items) {
    Vote storage vote = votes[_id];
    return (vote.id, vote.title, vote.items);
  }

  function getVoteIds() public view returns(uint32[] memory data) {
    return voteIndex;
  }

  function validItem(uint8 _id, uint64 item) public returns (bool) {
    Vote storage vote = votes[_id];
    voteList = vote.items;

    for (uint i = 0; i < voteList.length; i++) {
      if (voteList[i] == item) {
        return true;
      }
    }
    return false;
  }

  function voteForItem(uint8 _id, uint64 item) public {
    require(validItem(_id, item));
    votesReceived[_id][item] += 1;
  }

  function totalVotesFor(uint8 _id, uint64 item) public returns (uint8) {
    require(validItem(_id, item));
    return votesReceived[_id][item];
  }
}
