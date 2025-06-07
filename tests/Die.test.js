const assert = require('assert');
const Die = require('../src/Die');

describe('Die', () => {
    it('should roll a value between 1 and 6', () => {
        const rollValue = Die.roll();
        assert(rollValue >= 1 && rollValue <= 6);
    });
});
