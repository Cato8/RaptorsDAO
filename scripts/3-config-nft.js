import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xDC9A82260a06915E729D425d33B6cDBB8E72A954",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Raptors fan #1",
        description: "This NFT will give you access to RaptorsDAO!",
        image: readFileSync("scripts/assets/Raptors.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()