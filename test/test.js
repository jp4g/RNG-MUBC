/**
 * @author Jack Gilcrest
 * @date 07.19.2019
 * Local test suite for RNG Game Contract
 */

const RNGContract = artifacts.require("./RNG");
require('chai').use(require('chai-as-promised')).should();

contract("RNG Game", async (accounts) => {
    let RNG;
    let administrator = accounts[0];
    before(async () => {
        RNG = RNGContract.deployed();
    });
    it("Generate Random Items", async () => {
        console.log("RNG: ", RNG);
        console.log("RNG Object Keys: ", Object.keys(RNG));
        console.log("Administrator: ", administrator);
        for(let i = 0; i < 25; i++)
            console.log(await RNG.drawItem()); 
    });
});