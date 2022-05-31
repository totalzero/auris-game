import Mobile from "../obj/Mobile";

export default class Monster extends Mobile {
 protected _aggresive: boolean = true
 
 get Aggresive(): boolean {
     return this._aggresive
 }

 set Aggresive(aggresive: boolean) {
     this._aggresive = aggresive
 }
}