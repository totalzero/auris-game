import GameObj from "../../obj/GameObj";
import Item from "../../obj/Item";
import Player from "../../std/Player";
import BaseView from "../BaseView";
import BaseContextMenu from "./BaseContextMenu";

export default class ItemContextMenu extends BaseContextMenu {
 constructor(view: BaseView, obj: Item)    {
     super(view, obj)
this._options = [
    ["podnieś", () => {
        if (this._obj.canPickup) {
            Player.Instance?.Room?.removeObject(this._obj)
            Player!.Instance?.addEquipment(this._obj as Item)
            this.backToPreviousView()
        }else {
this.say("tego nie morzna podnieść")
        }
        }],
        ["obejrzyj", () => {
            const info: string = this._obj.getInfo() as string
            this.say(info)
        }]
]
 }
}