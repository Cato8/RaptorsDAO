import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0xeb98eFce13A10bc2e7bC1B69B59934743c7c58eF",
);

(async () => {
  try{
    console.log("Roles that exist right now: ",
    await tokenModule.getAllRoleMembers());

    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);

    console.log("Roles after revoking ourselves",
    await tokenModule.getAllRoleMembers());

    console.log("Successfully revoked our superpowers from the erc-20 contract");

  }catch(error){
    console.error("Failed to revoke ourselves from the DAO treasury",error);
  }
})();