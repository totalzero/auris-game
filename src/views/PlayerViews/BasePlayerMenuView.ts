import { BaseMenu } from "../BaseMenu";
import BaseView from "../BaseView";
import { ChangeView } from "../../tools/Focus";
import * as SoundManager from "../../tools/SoundManager"

export default class BasePlayerMenuView extends BaseMenu {
 constructor(view: BaseView, messageOpenMenu: string = "") {
     super(view, messageOpenMenu)
         this._messageCloseMenu = "Powrót"
 }
}