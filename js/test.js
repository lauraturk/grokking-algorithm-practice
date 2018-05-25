const assert = require('chai').assert;
const recursiveCountDown = require('./practice').recursiveCountDown;
const sumFunction = require('./practice').sumFunction
const countList = require('./practice').countList
const maxNumber = require('./practice').maxNumber

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

describe("divide and conquer", function () {
    it('should add the numbers in an array', function () {
        let result = sumFunction([1, 2, 3, 4])
        assert.equal(result, 10)
    });

    it('should add the numbers in an array', function () {
        let result = sumFunction([5, 7, 2, 10, 56])
        assert.equal(result, 80)
    });

    it('should add the numbers in an array', function () {
        let result = sumFunction([])
        assert.equal(result, 0)
    });

    it('should count the number of items in a list', () => {
        let result = countList(["dog", "cat", "pig", "rat", "racoon", "sheep"])
        assert.equal(result, 6)
    });

    it('should count the number of items in a list', () => {
        let result = countList(["dog", "cat", "pig"])
        assert.equal(result, 3)
    });

    it('should count the number of items in a list', () => {
        let result = countList([])
        assert.equal(result, 0)
    });

    it('should find the max number', () => {
        assert.equal(maxNumber([1, 2, 5, 8, 3]), 8)
        assert.equal(maxNumber([20, 45]), 45)
    });
});