import GameObj from "./GameObj";

export default class Item extends GameObj {
 protected _value: number = 0  
protected _combinations: Map<Function, Function> = new Map<Function, Function>()
constructor() {
    super()
    this._canPickup = true
    
}

 get Value(): number {
     return this._value
 }

 set Value(value: number) {
     this._value = value
 }

 getInfo(): String {
     return `${this.Name}.
     ${this.Description}.
     ${this.Offensive}.
     ${this.Defensive}.
     ${this.Value}`
 }

Combine(itm: Item): Item | undefined  {
    const newItem = this._combinations.get(itm.constructor)
    if (newItem) {
        return Reflect.construct(newItem, [])
    }
    
    return undefined   
}

}