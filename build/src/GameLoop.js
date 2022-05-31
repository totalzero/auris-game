"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mobile_1 = __importDefault(require("./obj/Mobile"));
const Player_1 = __importDefault(require("./std/Player"));
class GameLoop {
    constructor() {
        this._mobileLoop = undefined;
        this._respawnLoop = undefined;
    }
    Start() {
        this._mobileLoop = setInterval(() => {
            const npc = this.getNpcs();
            for (let element of npc) {
                element.Update();
            }
        }, 1000 / 60);
        this._respawnLoop = setInterval(() => {
            var _a, _b;
            (_b = (_a = Player_1.default.Instance) === null || _a === void 0 ? void 0 : _a.Room) === null || _b === void 0 ? void 0 : _b.Update();
        }, 1000 / 60);
    }
    Stop() {
        clearInterval(this._mobileLoop);
        clearInterval(this._respawnLoop);
    }
    getNpcs() {
        var _a, _b;
        const obj = (_b = (_a = Player_1.default.Instance) === null || _a === void 0 ? void 0 : _a.Room) === null || _b === void 0 ? void 0 : _b.Objects;
        const npc = [];
        if (obj != undefined) {
            for (let element of obj) {
                if (element instanceof Mobile_1.default)
                    npc.push(element);
            }
        }
        return npc;
    }
}
exports.default = GameLoop;
