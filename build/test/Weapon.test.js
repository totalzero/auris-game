"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../src/std/Player"));
const Weapon_1 = __importDefault(require("../src/std/Weapon"));
function newWeapon() {
    return new Weapon_1.default();
}
test('checking if weapon.use set player.slots.weapon', () => {
    const player = new Player_1.default();
    const weapon = newWeapon();
    weapon.Use();
    expect(player.Slots.weapon).toBe(weapon);
});
