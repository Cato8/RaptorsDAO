import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0xa3C388932eAaE983cfAeBffbBBe0c855f3e4d69f", );

(async () => {
  try{
    const voteModule = await appModule.deployVoteModule({
      name: "RaptorsDAO fans proposal ",
      votingTokenAddress: "0xeb98eFce13A10bc2e7bC1B69B59934743c7c58eF",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24*60*60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "100",
    });

    console.log("Successfully deployed vote module, address:", voteModule.address,);
  }catch(err){
    console.error("Failed to deploy vote module", err);
  }
})();

//0x97d0fb6638bBfc716ca38D403eC28fa854A96ADd