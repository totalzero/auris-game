import { BaseMenu } from "../BaseMenu";
import BaseView from "../BaseView";
import { ChangeView } from "../../tools/Focus";

export default class BasePlayerMenuView extends BaseMenu {
 protected _previousView: BaseView   
protected _menuClose: string = "powrót"

 constructor(view: BaseView) {
     super()
     this._previousView = view
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

protected backToPreviousView() {
    ChangeView(this._previousView)
    this.say(this._menuClose)
}

}