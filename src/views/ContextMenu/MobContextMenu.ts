import GameObj from "../../obj/GameObj";
import Monster from "../../std/Monster";
import ControlPlayer from "../../tools/ControlPlayer";
import BaseView from "../BaseView";
import BaseContextMenu from "./BaseContextMenu";

export default class MobContextMenu extends BaseContextMenu {
 constructor(view: BaseView, obj: GameObj)    {
     super(view, obj)

     this._options = [
     {
        name: "Obejrzyj",
        action:     () => {
            const info: string = this._obj!.getInfo() as string
            this.say(info)
        },
obj: obj
     }]
 }
}