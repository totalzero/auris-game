import Item from "../../obj/Item";
import Player from "../../std/Player";
import BaseView from "../BaseView";
import BasePlayerMenuView from "./BasePlayerMenuView";

export default class PlayerArmamentView extends BasePlayerMenuView {
    constructor(view: BaseView) {
        super(view)
 
this._options = [
[`Hełmn: ${this.checkName(Player!.Instance?.Slots.helmet)}`, () => {}],    
[`Zbroja: ${this.checkName(Player!.Instance?.Slots.armor)}`, () => {}],
[`Buty: ${this.checkName(Player!.Instance?.Slots.shoes)}`, () => {}],
[`Broń: ${this.checkName(Player!.Instance?.Slots.weapon)}`, () => {}]
]

        this.say("menu uzbrojenia")
    }

private checkName(item?: Item): string {
if (item) {
    return item.Name
}
return ""
}

}