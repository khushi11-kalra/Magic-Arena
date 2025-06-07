const Player = require('./Player');
const Die = require('./Die');

class Match {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    static fight(attacker, defender) {
        const attackRoll = Die.roll();
        const defenseRoll = Die.roll();

        const attackDamage = attacker.attack * attackRoll;
        const defenseStrength = defender.strength * defenseRoll;

        const damageTaken = Math.max(0, attackDamage - defenseStrength);
        defender.takeDamage(damageTaken);

        console.log(`Attacker rolls ${attackRoll}, Defender rolls ${defenseRoll}`);
        console.log(`Attack damage: ${attackDamage}, Defense strength: ${defenseStrength}`);
        console.log(`Defender health reduced by ${damageTaken} to ${defender.health}\n`);
    }

    start() {
        while (this.player1.isAlive() && this.player2.isAlive()) {
            if (this.player1.health < this.player2.health) {
                Match.fight(this.player1, this.player2);
                if (!this.player2.isAlive()) {
                    console.log("Player A wins!");
                    break;
                }
                Match.fight(this.player2, this.player1);
                if (!this.player1.isAlive()) {
                    console.log("Player B wins!");
                    break;
                }
            } else {
                Match.fight(this.player2, this.player1);
                if (!this.player1.isAlive()) {
                    console.log("Player B wins!");
                    break;
                }
                Match.fight(this.player1, this.player2);
                if (!this.player2.isAlive()) {
                    console.log("Player A wins!");
                    break;
                }
            }
        }
    }
}

module.exports = Match;
