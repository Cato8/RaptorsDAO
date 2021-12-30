import sdk from "./1-initialize-sdk.js";
import {ethers} from "ethers";

const tokenModule = sdk.getTokenModule("0xeb98eFce13A10bc2e7bC1B69B59934743c7c58eF",);

(async() =>{
  try{
    const amount = 4_160_000;

    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);

    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();

    console.log("There now is", ethers.utils.formatUnits(totalSupply, 18), "NORTH in circulation",);
  } catch (error){
    console.error("Failed to print money", error);
  }
})();