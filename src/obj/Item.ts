import GameObj from "./GameObj";

export default class Item extends GameObj {
 protected _value: number = 0  

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
}