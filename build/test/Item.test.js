"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../src/obj/Item"));
function newItem() {
    return new Item_1.default();
}
test('after initialisation item.Value should be 0', () => {
    expect(newItem().Value).toBe(0);
});
test('set item.Value', () => {
    const item = newItem();
    item.Value = 10;
    expect(item.Value).toBe(10);
});
