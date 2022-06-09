import Room from "../obj/Room";
import Player from "../std/Player";
import { ChangeView } from "../tools/Focus";
import GameState from "../tools/GameState";
import BaseView from "./BaseView";
import GameBoard from "./GameBoard";

export default class MiniMapView extends BaseView {
private _location?: Room
private _gameBoard: GameBoard

constructor(board: GameBoard) {
    super()
    this._location = Player.Instance?.Room
    this._gameBoard = board
    this.cursor()
}

 Keyboard(key: KeyboardEvent): void {
    switch (key.key) {
        case "ArrowUp":
            this.cursorNorth()
            break;
    
            case "ArrowDown":
this.cursorSouth()
            break;

            case "ArrowLeft":
this.cursorWest()
            break;

            case "ArrowRight":
this.cursorEast()
            break;

            case "Escape":
this.close()
            break;
        default:
            super.Keyboard(key)
            break;
    } 
 }   

private cursor() {
    /*
if (this._location == Player.Instance?.Room) {
    this.say("*" + this._location!.Name)
} else {
    this.say(this._location!.Name)
}
*/
this.say(this._location!.Name)
}

 private cursorNorth() {
this.isLocation(this._location?.Exits?.north)
 }

 private cursorSouth() {
    this.isLocation(this._location?.Exits?.south)
 }

 private cursorWest() {
    this.isLocation(this._location?.Exits?.west)
 }

 private cursorEast() {
this.isLocation(this._location?.Exits?.east)
 }

 private close() {
     this.say("zamykam minimape")
ChangeView(this._gameBoard)
 }

 private isLocation(location: Function | undefined) {
if (location) {
 this._location = GameState.getRoom(location)
 this.cursor()
} else {
    this.say("brak")
}
 }
}