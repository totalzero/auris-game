"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Room_1 = __importDefault(require("../../obj/Room"));
function Loc1() {
    const l = new Room_1.default();
    l.Description = "to jest zwykla lokacja testowa, nie spodziewaj sie niewiadomo co";
    l.Name = "lokacja testowa";
    return l;
}
exports.default = Loc1;
