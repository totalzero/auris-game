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
import * as SoundManager from "../tools/SoundManager"
import GameState from "../tools/GameState";
import Item from "../obj/Item";
import { Cursor } from "../obj/Types";
import { Exits } from "../obj/Exits";
import Attack from "../tools/Attack";
import Monster from "../std/Monster";
import { Floors } from "../obj/Floors";

export default class GameBoard extends BaseView {
    private _location?: Room 
private _selectedObject?: GameObj
private _objects?: GameObj[]
private _cursor: Cursor = {x: 0, y: 0}
private _objIter: Iterator = new Iterator([])

 constructor()    {
     super()
this._nameView = "Główny widok lokacji"     
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
SoundManager.SoundMenu.Nothing.play()
    }
}

private cursorDown() {
    this._selectedObject = undefined
    if (this._cursor.y > 0) {
    this._cursor.y -= 1
    this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)
    this.cursor()
    } else {
        SoundManager.SoundMenu.Nothing.play()
}
    }

private cursorLeft() {
    this._selectedObject = undefined
    if (this._cursor.x > 0) {
    this._cursor.x -= 1
    this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)
    this.cursor()
    } else {
        SoundManager.SoundMenu.Nothing.play()
}
}

private cursorRight() {
    this._selectedObject = undefined
    if (this._cursor.x <= 1) {
    this._cursor.x += 1
    this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)
    this.cursor()
    } else {
        SoundManager.SoundMenu.Nothing.play()
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
this._selectedObject = undefined
}

private exit() {
//new context menu z zapisz main menu i wroc do gry
}

 Keyboard(key: KeyboardEvent): void {
 
 switch (key.key) {

case "g":
this.Get()
break;

case "a":
this.Attack()
break;

case "l":
this.Look()
break;

case "x":
this.getRoomInfo()
break;
case "n":
    this.LeaveRoom("N")
    break;

case "s":
this.LeaveRoom("S")
break;

case "e":
this.LeaveRoom("E")
break;

case "w":
this.LeaveRoom("w")
break;

case " ":
this.combineItem()
break;

case "p":
this.openPlayerMenu()
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

const plFloor = (fl?: Floors) => {
switch (fl) {
    case Floors.grass:
        return "Trawa"
    break;
        
case Floors.stone:
return "Kamień"
break;

case Floors.water:
return "Woda"
break;
    default:
        return "ziemia"
        break;
}
}

let summary = ''
if (this._objects != undefined){
if (this._objects.length > 0) {
summary = `
${plFloor(this._location?.getFloor(this._cursor.x, this._cursor.y))}.
Obiekty: ${this._objects.length}`
} else {
    summary = `
    ${plFloor(this._location?.getFloor(this._cursor.x, this._cursor.y))}.
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
    return SoundManager.SoundFloors[this._location!.getFloor(this._cursor.x, this._cursor.y)]
}

private combineItem() {
    const itm = GameState.ItemToCombine
    if (itm && (itm instanceof Item)) {
const obj = this._selectedObject
if (obj instanceof Item) {
    (obj as Item).Combine(itm)
}
    }
}

LeaveRoom(direction: "N" | "S" | "E" | "w") {
    const changeRoom = (param: Function | undefined) => {
if (param) {
    
const rm = GameState.getRoom(param)
this.send(rm.GetRoomSummary())
Player.Instance!.Room = rm
ChangeView(new GameBoard())
} else {
    this.send("nie widzisz rzadnego wyjścia prowadzącego w tamtym kierunku.")
}
    }

switch (direction) {
    case "N":
    if (Player.Instance!.Y == 2) {
changeRoom(this._location?.Exits.north)        
Player.Instance!.Y = 0
    } else {
        this.send("musisz podejść do północnej krawędzi")
    }
        break;
case "S":
    if (Player.Instance!.Y == 0) {
changeRoom(this._location?.Exits.south)
Player.Instance!.Y = 2
    } else {
this.send("musisz podejść do południowej krawędzi")
    }
break;
case "E":
    if (Player.Instance!.X == 2) {
changeRoom(this._location?.Exits.east)
Player.Instance!.X = 0
    } else {
        this.send("musisz podejść do wschodniej krawędzi")
    }
break;
case "w":
    if (Player.Instance!.X == 0) {
changeRoom(this._location?.Exits.west)
Player.Instance!.X = 2
    } else {
        this.send("musisz podejść do zachodniej krawędzi")
    }
break;
    default:
        break;
}    
}

private getRoomInfo() {
    this.send(this._location!.GetRoomSummary())
}
private Attack() {
    if (this._selectedObject instanceof Monster && this.isExist(this._selectedObject)) {
if (! Attack(Player.Instance!, this._selectedObject)) {
    this.send("jesteś za daleko")
}
    } else {
        this.send("to jest poza twoim zasięgiem")
    }
}

private Look() {
    if (this._selectedObject) {
        this.send(this._selectedObject.getInfo() as string)
    }
}

Get() {
    if (new ControlPlayer().getItem(this._selectedObject as Item)) {    
    this.send(`Podnosisz: ${this._selectedObject!.Name}`)
    } else {
        this.send("tego nie morzesz podnieść")
    }
    this._selectedObject = undefined
    this._objects = this._location?.getObject(this._cursor.x, this._cursor.y)    
    this._objIter = new Iterator(this._objects!)
}

private isExist(obj: GameObj): boolean | undefined {
return Player.Instance!.Room?.Objects.includes(obj)
}

}
