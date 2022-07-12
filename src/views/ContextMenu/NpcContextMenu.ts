import GameObj from "../../obj/GameObj";
import Npc from "../../std/Npc";
import Trader from "../../std/Trader";
import Trainer from "../../std/Trainer";
import { ChangeView } from "../../tools/Focus";
import BaseView from "../BaseView";
import MobContextMenu from "./MobContextMenu";
import TradeContextMenu from "./TradeContextMenu";
import TrainingContextMenu from "./TrainingContextMenu";

export default class NpcContextMenu extends MobContextMenu {
 constructor(view: BaseView, obj: GameObj) {
     super(view, obj)
 if (obj instanceof Trader)     {
     this._options.push(["Handel", () => {
ChangeView(new TradeContextMenu(view, obj))
     }])
 }

 if (obj instanceof Trainer) {
     this._options.push(["Trening", () => {
ChangeView(new TrainingContextMenu(view, obj))
     }])
 }
 
 this._options.push(["Porozmawiaj", () => {
     this.say((obj as Npc).Conversation)
 }])
 }  
}