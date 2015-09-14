var assert = require('assert'),
    LCD = require('./numberToLCD')();

describe('numberToLCD', function () {

    it('should return the number 0 to representation using underscores and pipes', function () {
        var number = 0;
        var output = LCD.numberToLCD(number);
        assert.equal(output, ' _\n| |\n|_|');
    });

    it('should return the number 7 to representation using underscores and pipes', function () {
        var number = 7;
        var output = LCD.numberToLCD(number);
        assert.equal(output, ' _\n  |\n  |');
    });

    it('should return the number 18 to representation using underscores and pipes', function () {
        var number = 18;
        var output = LCD.numberToLCD(number);
        assert.equal(output, '     _\n  | |_|\n  | |_|');
    });

});