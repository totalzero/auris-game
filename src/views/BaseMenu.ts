import SoundManager from "../tools/SoundManager"
import Speech from "../tools/speech"
import BaseView from "./BaseView"

export  class BaseMenu extends BaseView {
    protected _menuPos: number = -1
    protected _execute: Function | undefined = undefined
protected _options: menuItem[]  = []




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
    SoundManager.Effect.Menu.MoveFocus.play()
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
         SoundManager.Effect.Menu.EnterOption.play()
this._execute()
     }
 }
}

export type menuItem = [string, Function]