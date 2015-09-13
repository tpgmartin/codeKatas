'use strict';

module.exports = function () {

    function fizzBuzzCheck (input) {
        return input % 15 === 0;
    }

    function buzzCheck (input) {
        return input % 5 === 0 || ~input.toString().indexOf(5);
    }

    function fizzCheck (input) {
        return input % 3 === 0 || ~input.toString().indexOf(3);
    }

    return {
        fizzBuzz: function (input) {

            if (fizzBuzzCheck(input)) {
                return 'FizzBuzz';
            }
            if (buzzCheck(input)) {
                return 'Buzz';
            }
            if (fizzCheck(input)) {
                return 'Fizz';
            }
            else {
                return input;
            }

        }
    };

};