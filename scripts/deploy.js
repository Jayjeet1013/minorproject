// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
//0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
async function main() {
  
  const crowdFunding = await hre.ethers.deployContract("CrowdFunding");

  await crowdFunding.waitForDeployment();

  console.log(
    `CrowdFunding deployed to ${crowdFunding.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
