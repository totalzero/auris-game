"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loc1 = void 0;
const _1 = require(".");
const Floors_1 = require("../../obj/Floors");
const Room_1 = __importDefault(require("../../obj/Room"));
const item1_1 = require("./item1");
class Loc1 extends Room_1.default {
    constructor() {
        super();
        this.Name = "lokacja testowa numer 1";
        this.Description = "to jest po prostu lokacja testowa, wiec nie spodziewaj sie niczego niezwyklego";
        this.Floors = [
            [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.none],
            [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.grass],
            [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.grass]
        ];
        this.AddObject(item1_1.Item1);
        this.Exits.north = _1.testArea.Locations.loc2;
    }
}
exports.Loc1 = Loc1;
