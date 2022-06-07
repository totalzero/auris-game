"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../../obj/Item"));
const Mobile_1 = __importDefault(require("../../obj/Mobile"));
const ItemContextMenu_1 = __importDefault(require("./ItemContextMenu"));
const MobContextMenu_1 = __importDefault(require("./MobContextMenu"));
/**
 *  creates specific context menu for obj parameter
 * @param view - the view from which the function was called
 * @param obj  - object for which the context menu will be created
 * @returns  specific context menu : MobContext menu or ItemContext menu or undefined when obj will be not recognised
 */
function createContextMenu(view, obj) {
    if (obj instanceof Item_1.default) {
        return new ItemContextMenu_1.default(view, obj);
    }
    if (obj instanceof Mobile_1.default) {
        return new MobContextMenu_1.default(view, obj);
    }
    return undefined;
}
exports.default = createContextMenu;
