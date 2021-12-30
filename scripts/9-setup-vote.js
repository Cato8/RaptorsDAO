import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule(
  "0x17a2aFF21d2C7f2Ccaf294e07A57b409d9035015",
);

const tokenModule = sdk.getTokenModule(
  "0xeb98eFce13A10bc2e7bC1B69B59934743c7c58eF",
);

(async () =>{
  try{
    await tokenModule.grantRole("minter", voteModule.address);

    console.log("Successfully gave the module permission to act on token module");
  } catch (error){
    console.error(
      "failed to grant vote module permission on token module", error
    );
    process.exit(1);
  }
  try{
    const ownedTokenBalance = await tokenModule.balanceOf(
      process.env.WALLET_ADDRESS 
    );

    const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
    const percent90 = ownedAmount.div(100).mul(90);

    await tokenModule.transfer(
      voteModule.address,
      percent90
    );
    console.log("Successfully transferred tokens to vote module ");
  }catch(err){
    console.error("failed to transfer tokens to vote module",err);
  }
})();