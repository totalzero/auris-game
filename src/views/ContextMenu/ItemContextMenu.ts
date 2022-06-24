import GameObj from "../../obj/GameObj";
import Item from "../../obj/Item";
import Player from "../../std/Player";
import ControlPlayer from "../../tools/ControlPlayer";
import BaseView from "../BaseView";
import BaseContextMenu from "./BaseContextMenu";

export default class ItemContextMenu extends BaseContextMenu {
 constructor(view: BaseView, obj: Item)    {
     super(view, obj)
this._options = [
    ["podnieś", () => {
        const ctrl = new ControlPlayer()
        if(ctrl.getItem(this._obj as Item)) {
            this.say(`podnosisz: ${this._obj.Name}`)
        } else {
            this.say("tego nie morzna podnieść")
        }
        this.backToPreviousView()
        }],
        ["obejrzyj", () => {
            const info: string = this._obj.getInfo() as string
            this.say(info)
        }]
]
 }
}