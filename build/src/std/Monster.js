"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mobile_1 = __importDefault(require("../obj/Mobile"));
class Monster extends Mobile_1.default {
    constructor() {
        super(...arguments);
        this._aggresive = true;
    }
    get Aggresive() {
        return this._aggresive;
    }
    set Aggresive(aggresive) {
        this._aggresive = aggresive;
    }
}
exports.default = Monster;
