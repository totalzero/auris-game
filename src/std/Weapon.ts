import Item from "../obj/Item";
import { randomInteger } from "../random";
import Player from "../std/Player"

export default class Weapon extends Item{
protected _distance: number = 0
protected _minDamage: number = 1
protected _maxDamage: number = 1

constructor() {
    super()
this._use = () => {
if (Player.Instance)     {
    Player.Instance.Slots.weapon = this
}
}
}

get MinDamage(): number {
    return this._minDamage
}

set MinDamage(damage) {
    this._minDamage = damage
}

get MaxDamage(): number {
    return this._maxDamage
}

set MaxDamage(damage) {
    this._maxDamage = damage
}

get Distance(): number {
    return this._distance
}

set Distance(disc: number) {
this._distance = disc
}

get Offensive(): number {
 return randomInteger(this._minDamage, this.MaxDamage)   
}
}