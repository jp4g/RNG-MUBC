pragma solidity  >= 0.4.0 < 0.7.0;

/**
 * @author Jack Gilcrest, Arthur Carvalho
 * Date: 07.17.2019
 * RNG Game Demonstration
 */
contract RNG {
    
    address public administrator;
    string[] public items = ["common", "rare", "very rare"];
    uint[] public percentages = [60, 30, 10];
    
    modifier onlyAdministrator() {
        require(msg.sender == administrator, "Only the RNG Administrator can draw a new item!");
        _;
    }

    constructor() public {
        administrator = msg.sender;
    }

    /**
     * Generate a new random item and return it as a string
     * Uses constant arrays percentages and items
     * @return item string the randomly generated item
     */
    function drawItem() public view onlyAdministrator() returns (string memory item) {
        require(items.length == percentages.length, "Percentages array is not the same length as Items array!");

        uint randomValue = randomNumberGeneration();
        uint lowerBoundary = 0;
        for (uint i=0; i < percentages.length; i++) {
            if (randomValue >= lowerBoundary && randomValue < lowerBoundary + percentages[i])
                return items[i];
            else
                lowerBoundary = lowerBoundary + percentages[i];
        }
    }
    
    /**
     * Generate a pseudo-random number by encoding the block difficulty and timestamp
     * Generated number is bound in range [0-99]
     * @return number uint8 value generated pseudo-randomly
     */
    function randomNumberGeneration() private view returns (uint8 number) {
        uint generated = uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
        number = uint8(generated % 100);
    }
}