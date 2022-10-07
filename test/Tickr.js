const { expect } = require('chai');

describe("Tickr", function () {
  it("Should return the corret name", async function (){

    const Tickr = await hre.ethers.getContractFactory("Tickr");

    const TickrDeployed = await Tickr.deploy("Tickr", "TCKR");

    await TickrDeployed.deployed();

    expect( await TickrDeployed.name()).to.equal("Tickr");
    expect( await TickrDeployed.symbol()).to.equal("TCKR");

  });
});