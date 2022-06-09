"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loc2 = void 0;
const Room_1 = __importDefault(require("../../obj/Room"));
const loc1_1 = require("./loc1");
class Loc2 extends Room_1.default {
    constructor() {
        super();
        this.Name = "lokacja druga testowa";
        this.Description = "to jest druga testowa lokacja, wiec nie spodziewaj sie niczego ";
        this.Exits.south = loc1_1.Loc1;
    }
}
exports.Loc2 = Loc2;
