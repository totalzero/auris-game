"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../src/obj/Item"));
const Mobile_1 = __importDefault(require("../src/obj/Mobile"));
const BaseView_1 = __importDefault(require("../src/views/BaseView"));
const ContextMenuFactory_1 = __importDefault(require("../src/views/ContextMenu/ContextMenuFactory"));
const ItemContextMenu_1 = __importDefault(require("../src/views/ContextMenu/ItemContextMenu"));
function newItem() {
    return new Item_1.default();
}
function newMob() {
    return new Mobile_1.default();
}
test('when create context menu with newItem return ItemContextMenu object', () => {
    expect((0, ContextMenuFactory_1.default)(new BaseView_1.default(), newItem())).toBeInstanceOf(ItemContextMenu_1.default);
});
