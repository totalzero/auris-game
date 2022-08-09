import GameObj from "../../obj/GameObj";
import { ChangeView } from "../../tools/Focus";
import SoundManager from "../../tools/SoundManager";
import { BaseMenu } from "../BaseMenu";
import BaseView from "../BaseView";

export default class BaseContextMenu extends BaseMenu {
 

protected _menuName: string = "Menu Obiektu"

 constructor(view: BaseView, obj: GameObj, menuName: string = "Menu Obiektu") {
     super()
     this._previousView = view
     this._obj = obj
     this._menuName = menuName
     this.say(this._menuName)
 }

 

}