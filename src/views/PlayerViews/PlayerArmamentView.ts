import Item from "../../obj/Item";
import Armor from "../../std/Armor";
import Helmet from "../../std/Helmet";
import Player from "../../std/Player";
import Shoes from "../../std/Shoes";
import Weapon from "../../std/Weapon";
import GameState from "../../tools/GameState";
import BaseView from "../BaseView";
import BasePlayerMenuView from "./BasePlayerMenuView";

export default class PlayerArmamentView extends BasePlayerMenuView {
    constructor(view: BaseView) {
        super(view, "Menu Uzbrojenia")
 this._messageCloseMenu = "powrót"
this.init()
        }

init() {
    this._options = [
        {
        name: `Hełmn: ${this.checkName(Player!.Instance?.Slots.helmet)}`,
        action: ()  => {
            const helmet = GameState.ItemToCombine
        
        if (helmet instanceof Helmet) {
            this.RemoveArmament("helmet")
                Player.Instance!.Slots.helmet = helmet
                Player.Instance!.removeEquipment(helmet)
                this.send(`zakładasz: ${helmet.Name}`)
            } else {
                this.say("to nie pasuje jako hełm ")
            }
        }
        },
        {
            name: `Zbroja: ${this.checkName(Player!.Instance?.Slots.armor)}`,
            action: () => {
        const arm = GameState.ItemToCombine
        
        if (arm instanceof Armor) {
            this.RemoveArmament("armor")
            Player.Instance!.removeEquipment(arm)
            Player.Instance!.Slots.armor = arm
            this.send(`Zakładasz: ${arm.Name}`)
        } else {
            this.say("to nie pasuje jako zbroja")
        }
            }
        },
        {
            name: `Buty: ${this.checkName(Player!.Instance?.Slots.shoes)}`,
            action: () => {
                const sho = GameState.ItemToCombine
        
                if (sho instanceof Shoes) {
                    this.RemoveArmament("shoes")
                    Player.Instance!.removeEquipment(sho)
                    Player.Instance!.Slots.shoes = sho
                    this.send(`zakładasz: ${sho.Name}`)
                } else {
                    this.say("to nie pasuje jako buty")
                }
            },
        },
        {
            name: `Broń: ${this.checkName(Player!.Instance?.Slots.weapon)}`,
            action: () => {
                const wp = GameState.ItemToCombine
        
                if (wp instanceof Weapon) {
        this.RemoveArmament("weapon")
        Player.Instance!.removeEquipment(wp)
        Player.Instance!.Slots.weapon = wp
        this.send(`Zakładasz: ${wp.Name}`)
                } else {
        this.say("to nie nadaje sie jako broń")
                }
            }
        }
        ]
        
}

protected run(): void {
    super.run()
    this.init()
    GameState.ItemToCombine = undefined
}

Keyboard(key: KeyboardEvent): void {
    switch (key.key) {
        case " ":
            this.run()
            break;
    
        default:
            super.Keyboard(key)
            break;
    }

    
}

private checkName(item?: Item): string {
if (item) {
    return item.Name
}
return ""
}

RemoveArmament(slot: "helmet" | "armor" | "shoes" | "weapon") {
switch (slot) {
    case "armor":
        this.AddItemToEquipment(Player.Instance!.Slots.armor)
        Player.Instance!.Slots.armor = undefined
        break;
case "helmet":
this.AddItemToEquipment(Player.Instance!.Slots.helmet)
Player.Instance!.Slots.helmet = undefined
break;
case "shoes":
this.AddItemToEquipment(Player.Instance!.Slots.shoes)
Player.Instance!.Slots.shoes = undefined
break;
case "weapon":
this.AddItemToEquipment(Player.Instance!.Slots.weapon)
Player.Instance!.Slots.weapon = undefined
break;

    default:
        break;
}
}

private AddItemToEquipment(item: Item | undefined) {
    if (item) {
        Player.Instance!.addEquipment(item)
    }
}
}