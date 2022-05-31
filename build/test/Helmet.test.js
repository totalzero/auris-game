"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Helmet_1 = __importDefault(require("../src/std/Helmet"));
const Player_1 = __importDefault(require("../src/std/Player"));
function newHelmet() {
    return new Helmet_1.default();
}
test('checking if helmet in player.slots.helmet', () => {
    const player = new Player_1.default();
    const helmet = newHelmet();
    helmet.Use();
    expect(player.Slots.helmet).toBe(helmet);
});
