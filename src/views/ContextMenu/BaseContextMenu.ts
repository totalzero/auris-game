import GameObj from "../../obj/GameObj";
import { ChangeView } from "../../tools/Focus";
import { BaseMenu, menuItem } from "../BaseMenu";
import BaseView from "../BaseView";

export default class BaseContextMenu extends BaseMenu {
 protected _previousView: BaseView
protected _obj: GameObj

 constructor(view: BaseView, obj: GameObj) {
     super()
     this._previousView = view
     this._obj = obj
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

protected _cursor(position: menuItem): void {
    super._cursor(position)
    this.backToPreviousView()
}

 protected backToPreviousView() {
     ChangeView(this._previousView)
 }

}