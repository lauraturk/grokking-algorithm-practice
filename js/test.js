const assert = require('chai').assert;
const recursiveCountDown = require('./recursion').recursiveCountDown;

describe("recursion", function () {
    it('should count down from 5', function () {
        let testArray = []
        let result = recursiveCountDown(5, testArray);
        assert.deepEqual(result, [5, 4, 3, 2, 1, 0]);
    });

    it('should count down from 6', function () {
        let secondTestArray = []
        let result = recursiveCountDown(6, secondTestArray);
        assert.deepEqual(result, [6, 5, 4, 3, 2, 1, 0]);
    });

    it('should count down from 2', function () {
        let thirdTestArray = []
        let result = recursiveCountDown(2, thirdTestArray);
        assert.deepEqual(result, [2, 1, 0]);
    });
});