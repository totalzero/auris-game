import GameObj from "../../obj/GameObj";
import BaseView from "../BaseView";
import BaseContextMenu from "./BaseContextMenu";
import ItemContextMenu from "./ItemContextMenu";
import MobContextMenu from "./MobContextMenu";

export default function createContextMenu(view: BaseView, obj: GameObj): BaseContextMenu | undefined {
switch (obj.constructor.name) {
case "Item":
    return new ItemContextMenu(view, obj)
    break;

    case "Mobile":
return new MobContextMenu(view, obj)
    break;
    default:
        return undefined
        break
}
}