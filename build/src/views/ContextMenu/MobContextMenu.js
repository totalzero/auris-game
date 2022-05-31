"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseContextMenu_1 = __importDefault(require("./BaseContextMenu"));
class MobContextMenu extends BaseContextMenu_1.default {
    constructor(view, obj) {
        super(view, obj);
        this._options = [
            ["atakuj", () => {
                    this.say("narazie atak został wyłączony");
                }],
            ["obejrzyj", () => {
                    const info = this._obj.getInfo();
                    this.say(info);
                }]
        ];
    }
}
exports.default = MobContextMenu;
