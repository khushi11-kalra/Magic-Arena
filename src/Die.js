class Die {
    static roll() {
        return Math.floor(Math.random() * 6) + 1; // 1 to 6 sided die
    }
}

module.exports = Die;
