import GameObj from "../../obj/GameObj";
import Npc from "../../std/Npc";
import Trader from "../../std/Trader";
import Trainer from "../../std/Trainer";
import { ChangeView } from "../../tools/Focus";
import BaseView from "../BaseView";
import GameBoard from "../GameBoard";
import TradeMenu from "../TradeMenu";
import MobContextMenu from "./MobContextMenu";
import TrainingContextMenu from "./TrainingContextMenu";

export default class NpcContextMenu extends MobContextMenu {
 constructor(view: BaseView, obj: GameObj) {
     super(view, obj)
 if (obj instanceof Trader)     {
    this._options.push({
        name: "Handel",
        action:     () => {
            ChangeView(new TradeMenu(new GameBoard(), obj))
                 },
                 obj: obj
    })
 }

 if (obj instanceof Trainer) {
this._options.push({
    name: "Trening",
    action:     () => {
        ChangeView(new TrainingContextMenu(view, obj))
             },
             obj: obj
        
}) 
}
 this._options.push({
    name: "Porozmawiaj",
    action: () => {
        this.say((obj as Npc).Conversation)
    },
    obj: obj
})
 }  
}