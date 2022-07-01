import Item from "../obj/Item";
import { randomBoolean, randomInteger } from "../random";
import Monster from "../std/Monster";
import Player from "../std/Player";
import Attack from "./Attack";
import GameState from "./GameState";

export default class ControlPlayer {
 private _player: Player   

 constructor() {
     this._player = Player!.Instance!
 }

Move(x: number, y: number): string {
const desc = this.movingDescription(x, y)
if (this.distanceFromPlayer(x, y) === 0) {
return ""
} else {
this.goPoint(x, y)
if (this._player.ActionPoints <= 0) {
GameState.startUpdate()
}
}
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

Combat(mob: Monster): string {
    let combatInfo = ''
const distance = this.distanceFromPlayer(mob.X, mob.Y)

const isDistance = distance <= this._player.CombatDistance
const isHit = randomBoolean()
const pOffens = this._player.Offensive
const damage = function () {
const dm = pOffens - mob.Defensive
if (dm > 0) {
    return dm
} else {
    return randomInteger(0, 10)
}
}()

if (isDistance) {
if (isHit) {
combatInfo = `atakujesz ${mob.Name}, twój przeciwnik traci ${damage} z ${mob.HP} punktów rzycia`
mob.HP -= damage
} else {
    combatInfo = "nie udało ci się trafić przeciwnika"
}
} else {
    combatInfo = "musisz podejść do przeciwnika"
}
return combatInfo
}

private goPoint(x: number, y: number) {
const distance = this.distanceFromPlayer(x, y)   

if (this._player.ActionPoints >= distance)    {
this._player.X = x
this._player.Y = y
this._player.ActionPoints -= distance
}
}

private movingDescription(x: number, y: number): string {
 const px = this._player.X   
 const py = this._player.Y

const distance = this.distanceFromPlayer(x, y)
if (this._player.ActionPoints < distance) {
return "za mało punktów ruchu"
}

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

private distanceFromPlayer(x: number, y: number): number {
const X = this._player.X - x
const Y = this._player.Y - y
return Math.sqrt(X * X) + Math.sqrt(Y * Y)
}

}