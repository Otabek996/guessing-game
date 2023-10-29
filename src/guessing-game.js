class GuessingGame {
    constructor() {}

    setRange(a, b) {
        this.min = a + 1;
        this.max = b;
    }

    guess() {
        this.middle = Math.floor((this.max + this.min) / 2);
        return this.middle;
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle + 1;
    }
}

module.exports = GuessingGame;
