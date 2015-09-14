'use strict';

module.exports = function () {

    var numbers = {
        0: ' _\n| |\n|_|',
        1: '  \n  |\n  |',
        2: ' _\n _|\n|_ ',
        3: ' _\n _|\n _|',
        4: '  \n|_|\n  |',
        5: ' _\n|_ \n _|',
        6: ' _\n|_ \n|_|',
        7: ' _\n  |\n  |',
        8: ' _\n|_|\n|_|',
        9: ' _\n|_|\n _|'
    };

    function iterateNumber (num) {
        var numToArray = num.toString().split('');

        for (var i=0; i<numToArray.length; i++) {
            numToArray[i] = +numToArray[i];
        }

        return numToArray;
    }

    return {
        numberToLCD: function (input) {

            var output = '';
            var inputArray = iterateNumber(input);
            var inputToLCD = '';

            for (var i= 0,max=inputArray.length; i<max; i++) {

                inputToLCD = numbers[inputArray[i]];

                if (output) {
                    output = output.split('\n');
                    inputToLCD = inputToLCD.split('\n');

                    output[0] += '  ' + inputToLCD[0];

                    for (var j= 1; j<output.length; j++) {
                        output[j] += ' ' + inputToLCD[j];
                    }

                    output = output.join('\n');

                } else {
                    output += inputToLCD;
                }

            }

            return output;

        }
    };

};