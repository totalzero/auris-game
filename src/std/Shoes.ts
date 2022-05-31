import Item from "../obj/Item";
import Player from "./Player";

export default class Shoes extends Item {
    constructor() {
        super()
        this._use = () => {
            if (Player.Instance) {
                Player.Instance.Slots.shoes = this
            }
        }
    }
}