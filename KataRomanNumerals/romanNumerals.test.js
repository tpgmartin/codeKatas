var assert = require('assert'),
    romanNumerals = require('./romanNumerals')();

describe('romanNumerals', function () {

    it('should return the "I" for the number 1', function () {
        var number = 1;
        var numeral = romanNumerals.convertToNumerals(number);
        assert.equal('I', numeral);
    });

    it('should return the "II" for the number 2', function () {
        var number = 2;
        var numeral = romanNumerals.convertToNumerals(number);
        assert.equal('II', numeral);
    });

    it('should return the "IV" for the number 4', function () {
        var number = 4;
        var numeral = romanNumerals.convertToNumerals(number);
        assert.equal('IV', numeral);
    });


    it('should return the "V" for the number 5', function () {
        var number = 5;
        var numeral = romanNumerals.convertToNumerals(number);
        assert.equal('V', numeral);
    });


    it('should return the "VII" for the number 7', function () {
        var number = 7;
        var numeral = romanNumerals.convertToNumerals(number);
        assert.equal('VII', numeral);
    });

    it('should return the "IX" for the number 3000', function () {
        var number = 9;
        var numeral = romanNumerals.convertToNumerals(number);
        assert.equal('IX', numeral);
    });

});