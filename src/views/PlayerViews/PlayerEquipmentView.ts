import Item from "../../obj/Item";
import Player from "../../std/Player";
import { ChangeView } from "../../tools/Focus";
import GameState from "../../tools/GameState";
import BaseView from "../BaseView";
import BasePlayerMenuView from "./BasePlayerMenuView";
import PlayerEquipmentContextMenu from "./PlayerEquipmentContextMenu";

export default class PlayerEquipmentView extends BasePlayerMenuView {

private _listItemsToCombine: Item[] = []

 constructor(view: BaseView)    {
     super(view)
this.constructMenu()
this.say("ekwipunek")
 }

Keyboard(key: KeyboardEvent): void {
    switch (key.key) {
        case " ":
            this.getItemToCombine()
            break;
    
        default:
            super.Keyboard(key)
            break;
    }
}

private getItemToCombine() {
try {
        
    if (GameState.ItemToCombine) {
        const result = this._listItemsToCombine[this._menuPos].Combine(GameState.ItemToCombine)
        if (result ) {
            Player.Instance?.addEquipment(result)
            this.say(`otrzymujesz ${result.Name}`)
        }
            } else {
        const result = this._listItemsToCombine[this._menuPos]
        GameState.ItemToCombine = result
        this.say(`zaznaczam do połączenia ${result.Name}`)
            }
        
} catch (error) {
this.say("błąd")
}
}

private addItemToMenu(item: Item) {
 this._options.push([`${item.Name}`, () => {
     ChangeView(new PlayerEquipmentContextMenu(this, item, this.updateEquipmentMenu))
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

private updateEquipmentMenu() {
    this._options = []
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