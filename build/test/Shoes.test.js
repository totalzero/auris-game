"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../src/std/Player"));
const Shoes_1 = __importDefault(require("../src/std/Shoes"));
test('checking if Shoes object to be in player.slots.shoes', () => {
    const shoes = new Shoes_1.default();
    const player = new Player_1.default();
    shoes.Use();
    expect(player.Slots.shoes).toBe(shoes);
});
