"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../../std/Player"));
const BaseContextMenu_1 = __importDefault(require("./BaseContextMenu"));
class ItemContextMenu extends BaseContextMenu_1.default {
    constructor(view, obj) {
        super(view, obj);
        this._options = [
            ["podnieś", () => {
                    var _a, _b;
                    if (this._obj.canPickup) {
                        (_b = (_a = Player_1.default.Instance) === null || _a === void 0 ? void 0 : _a.Room) === null || _b === void 0 ? void 0 : _b.removeObject(this._obj);
                    }
                    else {
                        this.say("tego nie morzna podnieść");
                    }
                }],
            ["obejrzyj", () => {
                    const info = this._obj.getInfo();
                    this.say(info);
                }]
        ];
    }
}
exports.default = ItemContextMenu;
