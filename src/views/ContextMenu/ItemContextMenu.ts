import GameObj from "../../obj/GameObj";
import Player from "../../std/Player";
import BaseView from "../BaseView";
import BaseContextMenu from "./BaseContextMenu";

export default class ItemContextMenu extends BaseContextMenu {
 constructor(view: BaseView, obj: GameObj)    {
     super(view, obj)
this._options = [
    ["podnieś", () => {
        if (this._obj.canPickup) {
            Player.Instance?.Room?.removeObject(this._obj)
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