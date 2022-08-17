import GameObj from "../obj/GameObj"
import { menuItem } from "../obj/Types"
import { ChangeView } from "../tools/Focus"
import * as SoundManager from "../tools/SoundManager"
import Speech from "../tools/speech"
import BaseView from "./BaseView"

export  class BaseMenu extends BaseView {
    protected _menuPos: number = -1
    protected _execute: Function | undefined = undefined
protected _options: menuItem[]  = []
protected _previousView?: BaseView
protected _obj?: GameObj
protected _messageCloseMenu: string = "zamykam menu"
protected _messageOpenMenu: string = ""

constructor(view?: BaseView, messageOpenMenu: string = "") {
    super()
    this._messageOpenMenu = messageOpenMenu
    this._previousView = view
    this.say(this._messageOpenMenu)
}

 Keyboard(key: KeyboardEvent): void {
 switch (key.key) {
     case "ArrowDown":
         this.cursorDown()
         break;
 
         case "ArrowUp":
             this.cursorUp()
             break;

             case "Enter":
this.run()
             break;

case "Escape":
    this.backToPreviousView()
    break;

     default:
        super.Keyboard(key)
         break;
 }    
 }

 protected backToPreviousView() {
    
    if (this._previousView) {
    ChangeView(this._previousView)
    this.say(this._messageCloseMenu)
    SoundManager.SoundMenu.CloseMenu.play()
    }
}

protected cursor(position: menuItem) {
    this._execute = position.action
    this._obj = position.obj
    SoundManager.SoundMenu.MoveFocus.play()
    Speech.say(position.name)
}

 protected cursorDown() {
if (this._menuPos < this._options.length- 1) {
this._menuPos ++
this.cursor(this._options[this._menuPos])
}
 }

 protected cursorUp() {
         if (this._menuPos > 0) {
             this._menuPos --
             this.cursor(this._options[this._menuPos])
         }
 }

 protected run() {
     if (this._execute !=  undefined) {
         SoundManager.SoundMenu.EnterOption.play()
this._execute()
     }
 }
}
