import Item from "../obj/Item";
import Player from "./Player";

export default class Foods extends Item {
 protected _mod: number = 1   

 constructor() {
     super()
     this._use = () => {
if (Player.Instance) {
    Player.Instance.HP += this._mod
}
     }
 }
}