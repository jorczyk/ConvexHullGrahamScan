function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomFloat = Math.random();
    return Math.floor(randomFloat * (max - min + 1)) + min;
}