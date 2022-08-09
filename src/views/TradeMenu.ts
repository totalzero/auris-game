import GameObj from "../obj/GameObj";
import Npc from "../std/Npc";
import Player from "../std/Player";
import { BaseMenu } from "./BaseMenu";
import BaseView from "./BaseView";

export default class TradeMenu extends BaseMenu {
private _tradingMode: TradingMode = "buy"


 constructor(view: BaseView, obj: GameObj) {
     super(view, "Menu Handlu")
     
     this.buyMode()
     this._tradingMode = "buy";

     this.say("urzyj klawisza tab, aby zmienić tryb handlu.")
 }  

Keyboard(key: KeyboardEvent): void {
    switch (key.key) {
        case "Tab":
            this.changeTradingMode()
            break;
    
        default:
            super.Keyboard(key);
            break;
    }
}

 private buyMode() {
     this.say("tryb kupowania")
     this._menuPos = -1
this._options = []
const eq = (this._obj as Npc).Equipment
for (let item of eq) {
    this._options.push({
        name: `${item.getInfo()}, wartość: ${item.Value}`,
        action:     () => {
            if (Player.Instance!.Money >= item.Value) {
    (this._obj as Npc).removeEquipment(item)
    Player.Instance!.addEquipment(item)
    Player.Instance!.Money -= item.Value
    this.say(`kupiłeś ${item.Name}`)
            } else {
                this.say("za mało złota")
            }
        },
        obj: item})
}
 }

 private sellMode() {
     this.say("tryb sprzedarzy")
this._menuPos = -1
this._options = []
const eq = Player.Instance!.Equipment
for (let item of eq) {
    this._options.push({
        name: `${item.getInfo()}, Wartość: ${item.Value}`,
        action:      () => {
            Player.Instance!.removeEquipment(item)
            Player.Instance!.Money += item.Value;
            (this._obj as Npc).addEquipment(item)
        },
    obj: item
    })
}
 }

 private changeTradingMode() {
switch (this._tradingMode) {
    case "buy":
        this.buyMode()
        this._tradingMode = "sell"
        break;

case "sell":
this.sellMode()
this._tradingMode = "buy";
break;

    default:
        break;
}
 }
}


type TradingMode = "buy" | "sell"