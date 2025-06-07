const Die = require('./Die');

class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    isAlive() {
        return this.health > 0;
    }

    attackDamage() {
        return this.attack * Die.roll();
    }

    defendDamage() {
        return this.strength * Die.roll();
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }
}

module.exports = Player;
