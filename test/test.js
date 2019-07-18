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
        RNG = await RNGContract.deployed();
    });
    it("Generate Random Items", async () => {
        for(let i = 0; i < 25; i++) {
            let item = await RNG.drawItem();
            console.log("Item #", + i + ": " + item); 
        }
    });
    it("Random Item Count", async () => {
        let items = [];
        for(let i = 0; i < 10000; i++)
            items[i] = await RNG.drawItem();
        let counts = [0, 0, 0];
        for(let i = 0; i < items.length; i++) {
            if(items[i] == 'common')
                counts[0]++;
            else if(items[i] == 'rare')
                counts[1] ++;
            else
                counts[2] ++;
        }
        console.log("Common Items Generated: ", counts[0]);
        console.log("Rare Items Generated: ", counts[1]);
        console.log("Very Rare Items Generated: ", counts[2]);
    });
});