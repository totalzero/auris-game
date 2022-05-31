"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Attack_1 = __importDefault(require("../src/Attack"));
const Mobile_1 = __importDefault(require("../src/obj/Mobile"));
function newMobile() {
    return new Mobile_1.default();
}
test('testing attack with mob1 offensive  100 and mob2 defensive 50', () => {
    const mob1 = newMobile();
    const mob2 = newMobile();
    mob1.Offensive = mob1.Defensive = 100;
    mob2.Defensive = mob2.Offensive = 50;
    (0, Attack_1.default)(mob1, mob2);
    expect(mob1.HP).toBe(100);
    expect(mob2.HP).toBeLessThan(100);
});
