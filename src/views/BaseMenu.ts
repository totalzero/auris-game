import Speech from "../tools/speech"
import BaseView from "./BaseView"

export  class BaseMenu extends BaseView {
    protected _menuPos: number = -1
    protected _execute: Function | undefined = undefined
protected _options: menuItem[]  = []
protected _soundOption = new Audio("sounds/menu/select-option.mp3")
protected _soundEnter = new Audio("sounds/menu/enter-option.mp3")


 Keyboard(key: KeyboardEvent): void {
 switch (key.key) {
     case "ArrowDown":
         this._cursorDown()
         break;
 
         case "ArrowUp":
             this._cursorUp()
             break;

             case "Enter":
this._run()
             break;

     default:
         break;
 }    
 }


protected _cursor(position: menuItem) {
    this._execute = position[1]
    this._soundOption.play()
    Speech.say(position[0])
}

 protected _cursorDown() {
if (this._menuPos < this._options.length- 1) {
this._menuPos ++
this._cursor(this._options[this._menuPos])
}
 }

 protected _cursorUp() {
         if (this._menuPos > 0) {
             this._menuPos --
             this._cursor(this._options[this._menuPos])
         }
 }

 protected _run() {
     if (this._execute !=  undefined) {
         this._soundEnter.play()
this._execute()
     }
 }
}

export type menuItem = [string, Function]