import GameObj from "../../obj/GameObj";
import BaseView from "../BaseView";
import BaseContextMenu from "./BaseContextMenu";

export default class MobContextMenu extends BaseContextMenu {
 constructor(view: BaseView, obj: GameObj)    {
     super(view, obj)

     this._options = [
         ["atakuj", () => {
             this.say("narazie atak został wyłączony")
         }],
         ["obejrzyj", () => {
             const info: string = this._obj.getInfo() as string
             this.say(info)
         }]
     ]
 }
}