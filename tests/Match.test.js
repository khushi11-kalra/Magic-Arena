const assert = require('assert');
const Player = require('../src/Player');
const Match = require('../src/Match');

describe('Match', () => {
    it('should end the match when a player dies', () => {
        const playerA = new Player(50, 5, 10);
        const playerB = new Player(100, 10, 5);

        const match = new Match(playerA, playerB);
        match.start();

        assert(playerA.health === 0 || playerB.health === 0);
    });
});
