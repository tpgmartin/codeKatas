var assert = require('assert'),
    tennis = require('./tennis')();

describe('tennis', function () {

    it('both players start a game at 0 points each', function () {

        var score = tennis.playGame();
        assert.equal(score.player1, 0);
    });


    it('scoring the first point increases a player\'s score to 15', function () {
        var game = {player1: 0, player2: 0};

        tennis.playGame(game, 'player1');

        assert.equal(game['player1'], 15);
    });

    it('scoring the second point increases a player\'s score to 30', function () {
        var game = {player1: 15, player2: 0};

        tennis.playGame(game, 'player1');

        assert.equal(game['player1'], 30);
    });

    it('scoring the third point increases a player\'s score to 40', function () {
        var game = {player1: 30, player2: 0};

        tennis.playGame(game, 'player1');

        assert.equal(game['player1'], 40);
    });


    it('both players scoring three points should set both players\' scores to 40', function () {
        var game = {player1: 30, player2: 40};

        tennis.playGame(game, 'player1');

        assert.equal(game['player1'], 40);
        assert.equal(game['player2'], 40);
    });

    it('scoring the fourth point resets all players\' scores to 0 {assuming playing game ball}' , function () {
        var game = {player1: 40, player2: 30};

        tennis.playGame(game, 'player1');

        assert.equal(game['player1'], 0);
        assert.equal(game['player2'], 0);
    });


    it('if both players are at 40, the next point gives the player advantage' , function () {
        var game = {player1: 40, player2: 40};

        tennis.playGame(game, 'player1');

        assert.equal(game['player1'], 'ad');
        assert.equal(game['player2'], 40);
    });


    it('if one player is at advantage and wins the next point, a new game begins - scores set to 0' , function () {
        var game = {player1: 'ad', player2: 40};

        tennis.playGame(game, 'player1');

        assert.equal(game['player1'], 0);
        assert.equal(game['player2'], 0);
    });

    it('if one player is at advantage and loses the next point, score returns to deuce' , function () {
        var game = {player1: 'ad', player2: 40};

        tennis.playGame(game, 'player2');

        assert.equal(game['player1'], 40);
        assert.equal(game['player2'], 40);
    });

});