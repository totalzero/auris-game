import Item from "../../obj/Item";
import Player from "../../std/Player";
import BaseView from "../BaseView";
import BasePlayerMenuView from "./BasePlayerMenuView";

export default class PlayerEquipmentView extends BasePlayerMenuView {
 constructor(view: BaseView)    {
     super(view)
this.constructMenu()
this.say("ekwipunek")
 }

private addItemToMenu(item: Item) {
 this._options.push([`${item.Name}`, () => {
     //kontekst menu dla itema, zdejmij wyrzuc zaloz uzyj
 }])   
}

private constructMenu() {
    const eq = Player!.Instance?.Equipment
    if (eq && (eq.length != 0)) {
for (let i of eq) {
    this.addItemToMenu(i)
}
    } else {
        this._options.push(["pusto", () => {}])
    }
}

}