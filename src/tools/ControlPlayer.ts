import Item from "../obj/Item";
import Monster from "../std/Monster";
import Player from "../std/Player";
import GameState from "./GameState";

export default class ControlPlayer {
 private _player: Player   

 constructor() {
     this._player = Player!.Instance!
 }

Move(x: number, y: number): string {
const desc = this.movingDescription(x, y)
this.goPoint(x, y)
GameState.startUpdate()
return desc
}

getItem(item: Item): boolean {
    if (item.canPickup) {
    this._player!.Room?.removeObject(item)
    this._player.addEquipment(item)
return true
    } else {
        return false
    }
}

Attack(mob: Monster) {

}

private goPoint(x: number, y: number) {
this._player.X = x
this._player.Y = y
}

private movingDescription(x: number, y: number): string {
 const px = this._player.X   
 const py = this._player.Y

const distance = ( function () {
const xx = x - px
const yy = y - py
return Math.sqrt(xx * xx) + Math.sqrt(yy * yy)
}())

const steps = (): string => {
    if (distance > 1) {
        return `idziesz ${distance} kroki na `
    } else {
        return "idziesz krok na "
    }
}

const direction = (): string => {
    if (y > py && x === px) {
        return "Północ"
    }

if (y < py && x === px) {
return "Południe"
}

if (x > px && y === py) {
    return "Wschód"
}

if (x < px && y === py) {
    return " Zachód"
}

if (y > py && x < px) {
    return "Północny-zachód"
}

if (y < py && x > px) {
    return "Południowy-Wschód"
}

if (y > py && x > px) {
    return "Północny-Wschód"
}

if (y < py && x < px) {
    return "Południowy-Zachód"
}
return "nieznany kierunek "
}
    
const result = steps() + direction()
 return result 
}



}