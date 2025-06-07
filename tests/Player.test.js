const assert = require('assert');
const Player = require('../src/Player');

describe('Player', () => {
    it('should reduce health when taking damage', () => {
        const player = new Player(100, 10, 5);
        player.takeDamage(20);
        assert.strictEqual(player.health, 80);
    });

    it('should calculate attack damage within expected range', () => {
        const player = new Player(100, 10, 5);
        const attackValue = player.attackDamage();
        assert(attackValue >= 5 && attackValue <= 30);
    });

    it('should calculate defend damage within expected range', () => {
        const player = new Player(100, 10, 5);
        const defendValue = player.defendDamage();
        assert(defendValue >= 10 && defendValue <= 60);
    });
});
