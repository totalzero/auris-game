"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../src/obj/Item"));
const Mobile_1 = __importDefault(require("../src/obj/Mobile"));
function newNpc() {
    return new Mobile_1.default();
}
test('after initialise npc.Offensive to be 0', () => {
    const npc = newNpc();
    expect(npc.Offensive).toBe(0);
});
test('set npc.offensive', () => {
    const npc = newNpc();
    npc.Offensive = 10;
    expect(npc.Offensive).toBe(10);
});
test('after initialisation npc.defensive should be 0', () => {
    const npc = newNpc();
    expect(npc.Defensive).toBe(0);
});
test('set npc.defensive', () => {
    const npc = newNpc();
    npc.Defensive = 1;
    expect(npc.Defensive).toBe(1);
});
test('after initialisation npc.level should be 0', () => {
    const npc = newNpc();
    expect(npc.Level).toBe(0);
});
test('set npc.level', () => {
    const npc = newNpc();
    npc.Level = 10;
    expect(npc.Level).toBe(10);
});
test('after initialisation npc.hp should be 100', () => {
    expect(newNpc().HP).toBe(100);
});
test('set npc.hp', () => {
    const npc = newNpc();
    npc.HP = 50;
    expect(npc.HP).toBe(50);
});
test('after initialisation npc.equipment should be empty', () => {
    expect(newNpc().Equipment.length).toBe(0);
});
test('add items to npc.equipment', () => {
    const npc = newNpc();
    npc.addEquipment(new Item_1.default(), new Item_1.default(), new Item_1.default());
    expect(npc.Equipment.length).toBe(3);
});
test('when npc.goNorth then npc.Y should be 1', () => {
    const npc = newNpc();
    npc.goNorth();
    expect(npc.Y).toBe(1);
});
test('when npc.goSouth then npc.y should be 0', () => {
    const npc = newNpc();
    npc.Y = 1;
    npc.goSouth();
    expect(npc.Y).toBe(0);
});
test('when npc.goEast then npc.x should be 1', () => {
    const npc = newNpc();
    npc.goEast();
    expect(npc.X).toBe(1);
});
test('when npc.goWest then npc.x should be 0', () => {
    const npc = newNpc();
    npc.X = 1;
    npc.goWest();
    expect(npc.X).toBe(0);
});
test('when npc.goNorth and npc.y == 2 then npc.y == 2', () => {
    const npc = newNpc();
    npc.Y = 2;
    npc.goNorth();
    expect(npc.Y).toBe(2);
});
test('when npc.gosouth then npc.y is 0', () => {
    const npc = newNpc();
    npc.goSouth();
    expect(npc.Y).toBe(0);
});
test('when npc.goEast and npc.W is 2 then npc.w == 2', () => {
    const npc = newNpc();
    npc.X = 2;
    npc.goEast();
    expect(npc.X).toBe(2);
});
test('when npc.goWest and npc.X is 0 then npc.X should be 0', () => {
    const npc = newNpc();
    npc.goWest();
    expect(npc.X).toBe(0);
});
test('remove item from equipment', () => {
    const mob = newNpc();
    const it1 = new Item_1.default();
    const it2 = new Item_1.default();
    const it3 = new Item_1.default();
    mob.addEquipment(it1, it2, it3);
    mob.removeEquipment(it2);
    expect(mob.Equipment.length).toBe(2);
    expect(mob.Equipment.includes(it2)).toBe(false);
});
test('mobile cant move', () => {
    const npc = newNpc();
    npc.Move = false;
    npc.goNorth();
    expect(npc.Y).toBe(0);
});
