"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../obj/Item"));
const Player_1 = __importDefault(require("../std/Player"));
class Weapon extends Item_1.default {
    constructor() {
        super();
        this._distance = 0;
        this._use = () => {
            if (Player_1.default.Instance) {
                Player_1.default.Instance.Slots.weapon = this;
            }
        };
    }
    get Distance() {
        return this._distance;
    }
    set Distance(disc) {
        this._distance = disc;
    }
}
exports.default = Weapon;
