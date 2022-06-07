"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AreaManager_1 = __importDefault(require("../tools/AreaManager"));
const GameObj_1 = __importDefault(require("./GameObj"));
class Item extends GameObj_1.default {
    constructor() {
        var _a;
        super();
        this._value = 0;
        this._canPickup = true;
        (_a = AreaManager_1.default.Instance) === null || _a === void 0 ? void 0 : _a.setItem(this);
    }
    get Value() {
        return this._value;
    }
    set Value(value) {
        this._value = value;
    }
    getInfo() {
        return `${this.Name}.
     ${this.Description}.
     ${this.Offensive}.
     ${this.Defensive}.
     ${this.Value}`;
    }
}
exports.default = Item;
