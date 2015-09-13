'use strict';

module.exports = function () {

    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    return {
        convertToNumerals: function (input) {
            var result = '';

            numbers.map(function (number,index) {
                while (input >= number) {
                    result += numerals[index];
                    input -= number;
                }
            });

            return result;
        }
    };

};