"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item1 = void 0;
const Item_1 = __importDefault(require("../../obj/Item"));
function item1() {
    const i = new Item_1.default();
    i.Name = "jakis tam przedmiot";
    i.Description = "to jest opis tego przedmiotu";
    i.X = 1;
    return i;
}
exports.Item1 = item1();
