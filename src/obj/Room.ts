import { Exits } from './Exits'
import { Floors } from './Floors'
import GameObj from './GameObj'

export default class Room {
private _name: string= ""
private _desc: string = ""
private _exits: Exits = {}
private _objects: GameObj[] = []
private _respawn: GameObj[] = []
private _floor: Floors[][] = [[Floors.none, Floors.none, Floors.none],
[Floors.none, Floors.none, Floors.none],
[Floors.none, Floors.none, Floors.none]]

get Name(): string {
 return this._name   
}

set Name(name: string) {
    this._name = name
}

get Description():string {
    return this._desc
}

set Description(desc: string) {
    this._desc = desc
}

AddObject(...obj: GameObj[]) {
    for (let i of obj) {
this._objects.push(i)
if (i.isRespawn)
this._respawn.push(i)
    }
}

get Objects(): GameObj[] {
    return this._objects
}

getObject(x: number, y: number): GameObj[] {
    let obj = []
 for(let element of this._objects) {
 if (element.X === x && element.Y === y)    
 obj.push(element)
 }
 return obj
}

removeObject(obj: GameObj) {
    let arr = []
    for(let element of this._objects) {
        if (element != obj)
        arr.push(element)
    }
    this._objects = arr
}

get Floors(): Floors[][] {
    return this._floor
}

set Floors(floor: Floors[][]) {
 if (floor.length != 3) {
     throw new Error('invalid floors')
 }
 
for (let fl of floor) {
    if (fl.length != 3)
    throw new Error('invalid element inside floors')
}

this._floor = floor
}

getFloor(x: number, y: number): Floors {
    return this._floor[y][x]
}

get Exits(): Exits {
    return this._exits
}

set Exits(exit: Exits) {
    this._exits = exit
}

Update() {
 for (let i of this._respawn)   {
     if (! this._objects.includes(i))
 this.AddObject (Reflect.construct(i.constructor, []))
 }

}
}