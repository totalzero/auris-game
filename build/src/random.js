"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomBoolean = exports.randomFloat = exports.randomInteger = void 0;
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
exports.randomInteger = randomInteger;
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
exports.randomFloat = randomFloat;
function randomBoolean() {
    let rnd = Math.random() * (5 - 1) + 1;
    return rnd <= 2.5;
}
exports.randomBoolean = randomBoolean;
