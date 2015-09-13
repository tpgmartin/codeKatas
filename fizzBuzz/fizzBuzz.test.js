var assert = require('assert'),
    FB = require('./fizzBuzz')();

describe('fizzBuzz', function () {

    it('should return the "Fizz" for numbers divisible by 3', function () {
        var number = 9;
        var output = FB.fizzBuzz(number);
        assert.equal(output, 'Fizz');
    });


    it('should return the "Buzz" for numbers divisible by 5', function () {
        var number = 25;
        var output = FB.fizzBuzz(number);
        assert.equal(output, 'Buzz');
    });


    it('should return the "FizzBuzz" for numbers divisible by 3 and 5', function () {
        var number = 60;
        var output = FB.fizzBuzz(number);
        assert.equal(output, 'FizzBuzz');
    });

    it('should return the "Fizz" for numbers that contain 3', function () {
        var number = 13;
        var output = FB.fizzBuzz(number);
        assert.equal(output, 'Fizz');
    });


    it('should return the "Buzz" for numbers that contain 52', function () {
        var number = 52;
        var output = FB.fizzBuzz(number);
        assert.equal(output, 'Buzz');
    });

});