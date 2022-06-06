"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testArea = void 0;
const loc1_1 = require("./loc1");
const loc2_1 = require("./loc2");
const item1_1 = require("./item1");
const loc1 = new loc1_1.Loc1();
const loc2 = new loc2_1.Loc2();
exports.testArea = {
    Locations: {
        loc1,
        loc2,
    },
    Npcs: {},
    Items: {
        Item1: item1_1.Item1,
    }
};
