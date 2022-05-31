import Item from "../obj/Item";
import Player from "../std/Player"

export default class Weapon extends Item{
protected _distance: number = 0


constructor() {
    super()
this._use = () => {
if (Player.Instance)     {
    Player.Instance.Slots.weapon = this
}
}
}

get Distance(): number {
    return this._distance
}

set Distance(disc: number) {
this._distance = disc
}
}