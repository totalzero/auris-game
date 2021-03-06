import GameObj from "../../obj/GameObj";
import { ChangeView } from "../../tools/Focus";
import SoundManager from "../../tools/SoundManager";
import { BaseMenu, menuItem } from "../BaseMenu";
import BaseView from "../BaseView";

export default class BaseContextMenu extends BaseMenu {
 protected _previousView: BaseView
protected _obj: GameObj
protected _menuName: string = "Menu Obiektu"

 constructor(view: BaseView, obj: GameObj, menuName: string = "Menu Obiektu") {
     super()
     this._previousView = view
     this._obj = obj
     this._menuName = menuName
     this.say(this._menuName)
 }

Keyboard(key: KeyboardEvent): void {
    switch (key.key) {
        case "Escape":
            this.backToPreviousView()
            break;

                default:
            super.Keyboard(key)
            break;
    }
}

protected _run(): void {
    super._run()
    //this.backToPreviousView()
}

 protected backToPreviousView() {
     this.say("zamykam menu")
     SoundManager.Effect.Menu.CloseMenu.play()
     ChangeView(this._previousView)
 }

}