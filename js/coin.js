class Coin {
    constructor(x, y) {
        this.x = x = Math.floor(Math.random() * 10);
        this.y = y = Math.floor(Math.random() * 10);
    }
}

module.exports = Coin;