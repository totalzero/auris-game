"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Foods_1 = __importDefault(require("../src/std/Foods"));
const Player_1 = __importDefault(require("../src/std/Player"));
function newFood() {
    class Poison extends Foods_1.default {
        constructor() {
            super();
            this._mod = -5;
        }
    }
    return new Poison();
}
test('using food will changed the player hp', () => {
    const poison = newFood();
    const player = new Player_1.default();
    poison.Use();
    expect(player.HP).toBeLessThan(player.MaxHP);
});
