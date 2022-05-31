import { randomBoolean, randomInteger } from "../random";
import GameObj from "./GameObj";
import Item from "./Item";

export default class Mobile extends GameObj {

protected _equipment: Item[] = []
protected _hp: number = 100
protected _move: boolean = true

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
    if (this.Move)
if (this.Y < 2)
this.Y += 1
}

goSouth() {
    if (this.Move)
if (this.Y > 0)
this.Y -= 1
}

goEast() {
    if (this.Move)
if (this.X < 2)
this.X += 1
}

goWest() {
    if (this.Move)
 if (this.X > 0)   
 this.X -= 1
}

Update(){
if (randomBoolean()) {
    switch (randomInteger(1, 4)) {
        case 1:
            this.goNorth()
            break;
    
            case 2:
                this.goEast()
                break;

                case 3:
                    this.goSouth()
                    break;

                    case 4:
                        this.goWest()
                        break;
                        
        default:
            break;
    }
}
}

getInfo(): String {
return `${this.Name}.
${this.Description}.
level: ${this.Level}`    
}

}