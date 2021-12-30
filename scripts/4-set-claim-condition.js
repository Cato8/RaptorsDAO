import sdk from './1-initialize-sdk.js';


const bundleDrop = sdk.getBundleDropModule("0xDC9A82260a06915E729D425d33B6cDBB8E72A954",);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 1000,
      maxQuantityPerTransaction: 1,
    });

    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Sucessfully set claim condition on bundle drop :", bundleDrop.address);
  } catch (error){
    console.error("Failed to set claim condition", error);
  }
})()
