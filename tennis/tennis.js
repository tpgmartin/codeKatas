'use strict';

module.exports = function () {

    var nextScore = {
        0: 15,
        15: 30,
        30: 40,
        40: 0
    };

    var notGameBall  = function (game, winningPlayer) {
        return game[winningPlayer] !== 40 && typeof game[winningPlayer] === "number";
    };

    var isGameBall = function (game, winningPlayer) {
        return game[winningPlayer] === 'ad' || (game[winningPlayer] === 40 && game.player1 !== 'ad' && game.player2 !== 'ad');
    };

    var playGame = function (game, winningPlayer) {

        var game;

        if (game) {
            if (notGameBall(game, winningPlayer)) {
                game[winningPlayer] = nextScore[game[winningPlayer]];
            } else {
                if (game.player1 === game.player2) {
                    game[winningPlayer] = 'ad';
                } else {
                    if (isGameBall(game, winningPlayer)) {
                        game.player1 = 0;
                        game.player2 = 0;
                    } else {
                        game.player1 = 40;
                        game.player2 = 40;
                    }
                }
            }

        } else {
            game = {
                player1: 0,
                player2: 0
            };
        }


        return game;
    };

    return {
        playGame: playGame
    };

};