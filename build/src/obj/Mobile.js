"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("../random");
const AreaManager_1 = __importDefault(require("../tools/AreaManager"));
const GameObj_1 = __importDefault(require("./GameObj"));
class Mobile extends GameObj_1.default {
    constructor() {
        var _a;
        super();
        this._equipment = [];
        this._hp = 100;
        this._move = true;
        this._canPickup = false;
        (_a = AreaManager_1.default.Instance) === null || _a === void 0 ? void 0 : _a.setMob(this);
    }
    get Equipment() {
        return this._equipment;
    }
    addEquipment(...items) {
        for (let element of items)
            this.Equipment.push(element);
    }
    removeEquipment(item) {
        let arr = [];
        for (let element of this._equipment) {
            if (element != item)
                arr.push(element);
        }
        this._equipment = arr;
    }
    get HP() {
        return this._hp;
    }
    set HP(hp) {
        this._hp = hp;
    }
    get Move() {
        return this._move;
    }
    set Move(mv) {
        this._move = mv;
    }
    goNorth() {
        if (this.Move)
            if (this.Y < 2)
                this.Y += 1;
    }
    goSouth() {
        if (this.Move)
            if (this.Y > 0)
                this.Y -= 1;
    }
    goEast() {
        if (this.Move)
            if (this.X < 2)
                this.X += 1;
    }
    goWest() {
        if (this.Move)
            if (this.X > 0)
                this.X -= 1;
    }
    Update() {
        if ((0, random_1.randomBoolean)()) {
            switch ((0, random_1.randomInteger)(1, 4)) {
                case 1:
                    this.goNorth();
                    break;
                case 2:
                    this.goEast();
                    break;
                case 3:
                    this.goSouth();
                    break;
                case 4:
                    this.goWest();
                    break;
                default:
                    break;
            }
        }
    }
    getInfo() {
        return `${this.Name}.
${this.Description}.
level: ${this.Level}`;
    }
}
exports.default = Mobile;
