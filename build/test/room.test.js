"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Room_1 = __importDefault(require("../src/obj/Room"));
const Floors_1 = require("../src/obj/Floors");
const GameObj_1 = __importDefault(require("../src/obj/GameObj"));
const loc = new Room_1.default();
function newRoom() {
    return new Room_1.default();
}
function newObject() {
    class TestObject extends GameObj_1.default {
    }
    return new TestObject();
}
test('after initialisation Room.Name field should be not defined', () => {
    expect(loc.Name.length).toBe(0);
});
test('after initialisation room.Description should be not defined', () => {
    expect(loc.Description.length).toBe(0);
});
test('after initialisation Room.Objects should be empty', () => {
    expect(loc.Objects.length).toBe(0);
});
test('after initialisation Room.Exits["east"] should be undefined', () => {
    expect(loc.Exits["east"]).toBeUndefined;
});
test('after initialisation Room.Floors value has been none', () => {
    expect(loc.Floors[0][2]).toBe("NONE");
});
test('ttests set room.Name', () => {
    const rm = newRoom();
    rm.Name = "nazwa";
    expect(rm.Name).toBe("nazwa");
});
test('set new description to Room.Description', () => {
    const rm = newRoom();
    const desc = "to jest jakas tam opisownia";
    rm.Description = desc;
    expect(rm.Description).toBe(desc);
});
test('test check validate arguments in room set floor', () => {
    const rm = newRoom();
    expect(() => {
        rm.Floors = [
            [Floors_1.Floors.grass, Floors_1.Floors.grass, Floors_1.Floors.grass]
        ];
    }).toThrow();
});
test('set valid parameters to Room.Floors', () => {
    const fl = [
        [Floors_1.Floors.grass, Floors_1.Floors.none, Floors_1.Floors.stone],
        [Floors_1.Floors.grass, Floors_1.Floors.none, Floors_1.Floors.stone],
        [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.none]
    ];
    const rm = newRoom();
    rm.Floors = fl;
    expect(rm.Floors).toBe(fl);
});
test('checking set exit to room', () => {
    const rm = newRoom();
    rm.Exits.north = new Room_1.default();
    expect(rm.Exits.north).toBeDefined();
});
test('add object to Room.objects', () => {
    const rm = newRoom();
    rm.AddObject(newObject(), newObject(), newObject());
    expect(rm.Objects.length).toBe(3);
});
test('get objects with concrete coordinates', () => {
    const obj1 = newObject();
    const obj2 = newObject();
    const obj3 = newObject();
    obj1.X = obj1.Y = obj2.X = obj2.Y = 1;
    obj3.X = 2;
    obj3.Y = 1;
    const rm = newRoom();
    rm.AddObject(obj1, obj2);
    rm.AddObject(obj3);
    expect(rm.getObject(1, 1)).toStrictEqual([obj1, obj2]);
});
test('deleting object from room.objects', () => {
    const room = newRoom();
    const obj1 = newObject();
    const obj2 = newObject();
    const obj3 = newObject();
    room.AddObject(obj1, obj2, obj3);
    room.removeObject(obj2);
    expect(room.Objects.length).toBe(2);
    expect(room.Objects.includes(obj2)).toBe(false);
});
test('testing respawn', () => {
    const rm = newRoom();
    const it1 = newObject();
    const it2 = newObject();
    const it3 = newObject();
    rm.AddObject(it1, it2, it3);
    expect(rm.Objects.length).toBe(3);
    rm.removeObject(it2);
    expect(rm.Objects.includes(it2)).toBe(false);
    rm.Update();
    expect(rm.Objects.length).toBe(3);
});
