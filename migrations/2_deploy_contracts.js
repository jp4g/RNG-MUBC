require("dotenv").config();
const RNG = artifacts.require("./RNG");

/**
 * @author Jack Gilcrest
 * @date 07.17.2019
 * Export RNG Smart Contract
 */
module.exports = async (deployer) => {
    await deployer.deploy(RNG);
}