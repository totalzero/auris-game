"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const Floors_1 = require("../../obj/Floors");
const Room_1 = __importDefault(require("../../obj/Room"));
function Loc1() {
    const l = new Room_1.default();
    l.Description = "to jest zwykla lokacja testowa, nie spodziewaj sie niewiadomo co";
    l.Name = "lokacja testowa";
    l.Exits = {
        north: _1.testArea.loc2
    };
    l.Floors = [
        [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.grass],
        [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.grass],
        [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.grass]
    ];
    return l;
}
exports.default = Loc1;
