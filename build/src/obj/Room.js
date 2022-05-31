"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Floors_1 = require("./Floors");
class Room {
    constructor() {
        this._name = "";
        this._desc = "";
        this._exits = {};
        this._objects = [];
        this._respawn = [];
        this._floor = [[Floors_1.Floors.none, Floors_1.Floors.none, Floors_1.Floors.none],
            [Floors_1.Floors.none, Floors_1.Floors.none, Floors_1.Floors.none],
            [Floors_1.Floors.none, Floors_1.Floors.none, Floors_1.Floors.none]];
    }
    get Name() {
        return this._name;
    }
    set Name(name) {
        this._name = name;
    }
    get Description() {
        return this._desc;
    }
    set Description(desc) {
        this._desc = desc;
    }
    AddObject(...obj) {
        for (let i of obj) {
            this._objects.push(i);
            if (i.isRespawn)
                this._respawn.push(i);
        }
    }
    get Objects() {
        return this._objects;
    }
    getObject(x, y) {
        let obj = [];
        for (let element of this._objects) {
            if (element.X === x && element.Y === y)
                obj.push(element);
        }
        return obj;
    }
    removeObject(obj) {
        let arr = [];
        for (let element of this._objects) {
            if (element != obj)
                arr.push(element);
        }
        this._objects = arr;
    }
    get Floors() {
        return this._floor;
    }
    set Floors(floor) {
        if (floor.length != 3) {
            throw new Error('invalid floors');
        }
        for (let fl of floor) {
            if (fl.length != 3)
                throw new Error('invalid element inside floors');
        }
        this._floor = floor;
    }
    getFloor(x, y) {
        return this._floor[y][x];
    }
    get Exits() {
        return this._exits;
    }
    set Exits(exit) {
        this._exits = exit;
    }
    Update() {
        for (let i of this._respawn) {
            if (!this._objects.includes(i))
                this.AddObject(Reflect.construct(i.constructor, []));
        }
    }
}
exports.default = Room;
