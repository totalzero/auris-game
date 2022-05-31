"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemContextMenu_1 = __importDefault(require("./ItemContextMenu"));
const MobContextMenu_1 = __importDefault(require("./MobContextMenu"));
function createContextMenu(view, obj) {
    switch (obj.constructor.name) {
        case "Item":
            return new ItemContextMenu_1.default(view, obj);
            break;
        case "Mobile":
            return new MobContextMenu_1.default(view, obj);
            break;
        default:
            return undefined;
            break;
    }
}
exports.default = createContextMenu;
