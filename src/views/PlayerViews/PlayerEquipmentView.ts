import Item from "../../obj/Item";
import Player from "../../std/Player";
import { ChangeView } from "../../tools/Focus";
import GameState from "../../tools/GameState";
import BaseView from "../BaseView";
import BasePlayerMenuView from "./BasePlayerMenuView";
import PlayerEquipmentContextMenu from "./PlayerEquipmentContextMenu";

export default class PlayerEquipmentView extends BasePlayerMenuView {



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
        const result = this._options[this._menuPos].obj!.Combine(GameState.ItemToCombine)
        if (result ) {
            Player.Instance?.addEquipment(result as Item)
            Player.Instance?.removeEquipment(GameState.ItemToCombine)
            Player.Instance?.removeEquipment(this._options[this._menuPos].obj! as Item)
            GameState.ItemToCombine = undefined
            this.updateEquipmentMenu()
            this.say(`otrzymujesz ${result.Name}`)
        } else {
            this.say("to nie pasuje")
            GameState.ItemToCombine = undefined
        }
            } else {
        const result = this._options[this._menuPos].obj
        if (result) {
        GameState.ItemToCombine = result as Item
        this.say(`zaznaczam do połączenia ${result.Name}`)
        }
            }
        
} catch (error) {
this.say("błąd")
console.log(error)
}
}

private addItemToMenu(item: Item) {
    this._options.push({
        name: item.Name,
        action: () => {
            ChangeView(new PlayerEquipmentContextMenu(new PlayerEquipmentView(this._previousView!), item))
        },
        obj: item
    })
 
}

private constructMenu() {
    const eq = Player!.Instance?.Equipment
    if (eq && (eq.length != 0)) {
for (let i of eq) {
    this.addItemToMenu(i)
}
    } else {
this._options.push({
    name: "Pusto",
    action: () => {}
})
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
        this._options.push({
            name: "pusto", 
            action: () => {
                this.say("nic tu nie ma")
            }
        })
    }

}

}