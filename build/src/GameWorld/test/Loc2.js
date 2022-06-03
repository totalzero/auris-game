"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loc2 = void 0;
const Room_1 = __importDefault(require("../../obj/Room"));
const loc1_1 = require("./loc1");
function loc2() {
    const l = new Room_1.default();
    l.Name = "to jest lokacja druga testowa";
    l.Description = "druga testowa lokacja wiec sie nie spodziewaj niewiadomo czego";
    l.Exits.south = loc1_1.Loc1;
    return l;
}
exports.Loc2 = loc2();
