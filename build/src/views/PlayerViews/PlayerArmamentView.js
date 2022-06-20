"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../../std/Player"));
const BasePlayerMenuView_1 = __importDefault(require("./BasePlayerMenuView"));
class PlayerArmamentView extends BasePlayerMenuView_1.default {
    constructor(view) {
        var _a, _b, _c, _d;
        super(view);
        this._options = [
            [`Hełmn: ${this.checkName((_a = Player_1.default.Instance) === null || _a === void 0 ? void 0 : _a.Slots.helmet)}`, () => { }],
            [`Zbroja: ${this.checkName((_b = Player_1.default.Instance) === null || _b === void 0 ? void 0 : _b.Slots.armor)}`, () => { }],
            [`Buty: ${this.checkName((_c = Player_1.default.Instance) === null || _c === void 0 ? void 0 : _c.Slots.shoes)}`, () => { }],
            [`Broń: ${this.checkName((_d = Player_1.default.Instance) === null || _d === void 0 ? void 0 : _d.Slots.weapon)}`, () => { }]
        ];
        this.say("menu uzbrojenia");
    }
    checkName(item) {
        if (item) {
            return item.Name;
        }
        return "";
    }
}
exports.default = PlayerArmamentView;
