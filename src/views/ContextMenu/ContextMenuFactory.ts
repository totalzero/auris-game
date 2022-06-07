import GameObj from "../../obj/GameObj";
import Item from "../../obj/Item";
import Mobile from "../../obj/Mobile";
import BaseView from "../BaseView";
import BaseContextMenu from "./BaseContextMenu";
import ItemContextMenu from "./ItemContextMenu";
import MobContextMenu from "./MobContextMenu";

/**
 *  creates specific context menu for obj parameter
 * @param view - the view from which the function was called
 * @param obj  - object for which the context menu will be created
 * @returns  specific context menu : MobContext menu or ItemContext menu or undefined when obj will be not recognised
 */

export default function createContextMenu(view: BaseView, obj: GameObj): BaseContextMenu | undefined {
if (obj instanceof Item) {
    return new ItemContextMenu(view, obj)
}

if (obj instanceof Mobile) {
    return new MobContextMenu(view, obj)
}

 return undefined   
}