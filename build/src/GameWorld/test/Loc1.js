"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loc1 = void 0;
const Floors_1 = require("../../obj/Floors");
const Room_1 = __importDefault(require("../../obj/Room"));
const item1_1 = require("./item1");
function loc1() {
    const l = new Room_1.default();
    l.Name = "lokacja testowa numer 1";
    l.Description = "to jest po prostu lokacja testowa, wiec nie spodziewaj sie niczego niezwyklego";
    l.Floors = [
        [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.none],
        [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.grass],
        [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.grass]
    ];
    l.AddObject(item1_1.Item1);
    return l;
}
exports.Loc1 = loc1();
