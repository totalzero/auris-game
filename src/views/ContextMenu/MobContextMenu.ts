import GameObj from "../../obj/GameObj";
import Monster from "../../std/Monster";
import ControlPlayer from "../../tools/ControlPlayer";
import BaseView from "../BaseView";
import BaseContextMenu from "./BaseContextMenu";

export default class MobContextMenu extends BaseContextMenu {
 constructor(view: BaseView, obj: GameObj)    {
     super(view, obj)

     this._options = [
         ["atakuj", () => {
             this.say(new ControlPlayer().Combat(this._obj as Monster))
             this.backToPreviousView()
         }],
         ["obejrzyj", () => {
             const info: string = this._obj.getInfo() as string
             this.say(info)
         }]
     ]
 }
}