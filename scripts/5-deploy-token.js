import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xa3C388932eAaE983cfAeBffbBBe0c855f3e4d69f");

(async() =>{
  try{
    const tokenModule = await app.deployTokenModule({
      name: "RaptorsDAO Governance Token",
      symbol: "NORTH",
    });
    console.log("You successfully create your token module, address:", tokenModule.address,);
  } catch (error){
    console.error("failed to deploy token module ", error);
  }
})();

//token module address: 0xeb98eFce13A10bc2e7bC1B69B59934743c7c58eF

