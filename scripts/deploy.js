const hre = require("hardhat");

async function main() {

  const Tickr = await hre.ethers.getContractFactory("Tickr");
  console.log('Deploying ERC721 token...');
  const token = await Tickr.deploy('Tickr','TCKR');

  await token.deployed();
  console.log("Tickr deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
