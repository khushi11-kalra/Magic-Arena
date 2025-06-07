const Player = require('./Player');
const Match = require('./Match');

const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);

const match = new Match(playerA, playerB);
match.start();
