import BaseView from "./BaseView";
import Iterator from "../tools/iterator";
import { ChangeView } from "../tools/Focus";
import createContextMenu from "./ContextMenu/ContextMenuFactory";
import Room from "../obj/Room";
import GameObj from "../obj/GameObj";
import Player from "../std/Player";

export default class GameBoard extends BaseView {
    private _location?: Room 
private _selectedObject?: GameObj
private _objects?: GameObj[]
private _cursor: Cursor = {x: 0, y: 0}
private _objIter: Iterator = new Iterator([])

 constructor()    {
     super()
     
     if (Player.Instance != undefined)    
 this._location = Player.Instance.Room

 }

private cursor()  {
this.say(this._collectionSummary())
if (this._objects != undefined)
this._objIter = new Iterator(this._objects)
}

private cursorUp() {
    if (this._cursor.y < this._location!.Floors.length) {
this._cursor.y += 1
this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)
this.cursor()
    } else {
this.say("tam nie ma nic")
this._cursor.y -- 
    }
}

private cursorDown() {
    if (this._cursor.y > 0) {
    this._cursor.y -= 1
    this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)
    this.cursor()
    } else {
this.say("tam nie ma nic")
this._cursor.y ++
    }
    }

private cursorLeft() {
    if (this._cursor.x > 0) {
    this._cursor.x -= 1
    this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)
    this.cursor()
    } else {
        this.say("tam nie ma nic")
        this._cursor.x ++
    }
}

private cursorRight() {
    if (this._cursor.x < this._location!.Floors[this._cursor.y].length) {
    this._cursor.x += 1
    this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)
    this.cursor()
    } else {
this.say("tam nic nie ma")
this._cursor.x --
    }
    }

private cursorTab() {
    if (this._objects != undefined && this._objects.length > 0) {
if (this._objIter.HasNext()) {
    this._selectedObject = this._objIter.Next()
    if (this._selectedObject?.Name != undefined)
    this.say(this._selectedObject?.Name)
} else {
    this._objIter.Reset()
    this.cursorTab()
}
    } else {
        this.say("nic tu nie ma")
    }
}

private execute() {
if (this._selectedObject)
ChangeView(createContextMenu(this, this._selectedObject)!)
}

private exit() {
//new context menu z zapisz main menu i wroc do gry
}

 Keyboard(key: KeyboardEvent): void {
 switch (key.key) {
     case "ArrowUp":
    this.cursorUp()     
         break;
 
         case "ArrowDown":
this.cursorDown()
         break;

         case "ArrowLeft":
this.cursorLeft()
         break;

         case "ArrowRight":
this.cursorRight()
         break;

         case "Enter":
this.execute()
         break;

         case "Escape":
this.exit()
         break;

         case "Tab":
this.cursorTab()
         break;

     default:
         super.Keyboard(key)
         break;
 }    
 }

private _collectionSummary(): string {
let summary = ''
if (this._objects != undefined){
if (this._objects.length > 0) {
summary = `
${this._location?.getFloor(this._cursor.x, this._cursor.y)}.
Obiekty: ${this._objects.length}`
} else {
    summary = `
    ${this._location?.getFloor(this._cursor.x, this._cursor.y)}.
`    
}
}

return summary
}

}

interface Cursor {
    x: number,
    y: number
}