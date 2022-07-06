import { randomBoolean, randomInteger } from "../random";
import GameState from "../tools/GameState";
import Speech from "../tools/speech";
import GameObj from "./GameObj";
import Item from "./Item";

export default class Mobile extends GameObj {

protected _equipment: Item[] = []
protected _hp: number = 100
protected _move: boolean = true
protected _combatDistance: number = 0

constructor() {
    super()
    this._canPickup = false
    
}

get Equipment(): Item[] {
    return this._equipment
}

addEquipment(... items: Item[]) {
    for (let element of items) 
    this.Equipment.push(element)
}

removeEquipment(item: Item) {
    let arr = []
    for (let element of this._equipment) {
        if (element != item)
        arr.push(element)
    }
    this._equipment = arr
}

get HP(): number {
    return this._hp
}

set HP(hp: number) {
    this._hp = hp
}

get Move(): boolean {
    return this._move
}

set Move(mv: boolean) {
    this._move = mv
}

goNorth() {
    if (this.Move) {
if (this.Y < 2) {
this.Y += 1
Speech.say(`${this.Name} przemieszcza się na północ`)
}
    }
}

goSouth() {
    if (this.Move)
if (this.Y > 0) {
this.Y -= 1
Speech.say(`${this.Name} przemieszcza się na południe`)
}
}

goEast() {
    if (this.Move)
if (this.X < 2) {
this.X += 1
Speech.say(`${this.Name} przemieszcza się na wschód`)
}
}

goWest() {
    if (this.Move)
 if (this.X > 0)    {
 this.X -= 1
 Speech.say(`${this.Name} przemieszcza się na zachód`)
 }
}

update(): void {
    if (this.Move) {
        this.goPoint(randomInteger(0, 2), randomInteger(0, 2))
    }
}

protected goPoint(x: number, y: number) {
    if (this.Y > y) {
this.goSouth()
return
    } else {
this.goNorth()
return
    }

    if (this.X > x) {
        this.goWest()
        return
    } else {
        this.goEast()
        return
    }
}

getInfo(): String {
return `${this.Name}.
${this.Description}.
level: ${this.Level}`    
}

get CombatDistance(): number {
    return this._combatDistance
}

set CombatDistance(dis) {
    this._combatDistance = dis
}

}