import Item from "../../obj/Item";
import Player from "../../std/Player";
import BaseView from "../BaseView";
import BasePlayerMenuView from "./BasePlayerMenuView";

export default class PlayerArmamentView extends BasePlayerMenuView {
    constructor(view: BaseView) {
        super(view)
 
this._options = [
{
name: `Hełmn: ${this.checkName(Player!.Instance?.Slots.helmet)}`,
action: ()  => {}
},
{
    name: `Zbroja: ${this.checkName(Player!.Instance?.Slots.armor)}`,
    action: () => {}
},
{
    name: `Buty: ${this.checkName(Player!.Instance?.Slots.shoes)}`,
    action: () => {},
},
{
    name: `Broń: ${this.checkName(Player!.Instance?.Slots.weapon)}`,
    action: () => {}
}
]

        
    }

private checkName(item?: Item): string {
if (item) {
    return item.Name
}
return ""
}

}