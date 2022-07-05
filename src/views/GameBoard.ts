import BaseView from "./BaseView";
import Iterator from "../tools/iterator";
import { ChangeView } from "../tools/Focus";
import createContextMenu from "./ContextMenu/ContextMenuFactory";
import Room from "../obj/Room";
import GameObj from "../obj/GameObj";
import Player from "../std/Player";
import MiniMapView from "./MiniMapView";
import ExitsMenu from "./ExitsMenu";
import PlayerMainView from "./PlayerViews/PlayerMainView";
import ControlPlayer from "../tools/ControlPlayer";
import SoundManager from "../tools/SoundManager";
import GameState from "../tools/GameState";

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
this.getSoundFloors().play()
if (this._objects != undefined)
this._objIter = new Iterator(this._objects)
}

private cursorUp() {
    this._selectedObject = undefined
    if (this._cursor.y <= 1) {
this._cursor.y += 1
this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)
this.cursor()
    } else {
SoundManager.Effect.Menu.Nothing.play()
    }
}

private cursorDown() {
    this._selectedObject = undefined
    if (this._cursor.y > 0) {
    this._cursor.y -= 1
    this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)
    this.cursor()
    } else {
        SoundManager.Effect.Menu.Nothing.play()
}
    }

private cursorLeft() {
    this._selectedObject = undefined
    if (this._cursor.x > 0) {
    this._cursor.x -= 1
    this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)
    this.cursor()
    } else {
        SoundManager.Effect.Menu.Nothing.play()
}
}

private cursorRight() {
    this._selectedObject = undefined
    if (this._cursor.x <= 1) {
    this._cursor.x += 1
    this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)
    this.cursor()
    } else {
        SoundManager.Effect.Menu.Nothing.play()
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
if (this._selectedObject) {
ChangeView(createContextMenu(this, this._selectedObject)!)
} else {
    new ControlPlayer().Move(this._cursor.x, this._cursor.y)
    
}
}

private exit() {
//new context menu z zapisz main menu i wroc do gry
}

 Keyboard(key: KeyboardEvent): void {
 
 switch (key.key) {

case "p":
this.openPlayerMenu()
break;

case "e" :
this.openExitsMenu()
break;

case "m":
this.openMinimap()
break;

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

private openMinimap() {
    ChangeView(new MiniMapView(this))
}

private openExitsMenu() {
    ChangeView(new ExitsMenu(this))
}

private openPlayerMenu() {
    ChangeView(new PlayerMainView(this))
}

private getSoundFloors(): HTMLAudioElement  {
    return SoundManager.Effect.Floors[this._location!.getFloor(this._cursor.x, this._cursor.y)]
}


}

interface Cursor {
    x: number,
    y: number
}