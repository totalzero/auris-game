"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Armor_1 = __importDefault(require("../src/std/Armor"));
const Player_1 = __importDefault(require("../src/std/Player"));
test('checking if object armor be in player.slots.armor', () => {
    const armor = new Armor_1.default();
    const player = new Player_1.default();
    armor.Use();
    expect(player.Slots.armor).toBe(armor);
});
