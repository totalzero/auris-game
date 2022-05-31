"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const Room_1 = __importDefault(require("../../obj/Room"));
function Loc2() {
    const l = new Room_1.default();
    l.Name = "lokacja 2";
    l.Description = "to jest druga lokacja testowa";
    l.Exits = {
        south: _1.testArea.loc1
    };
    return l;
}
exports.default = Loc2;
