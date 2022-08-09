import Player from "../../std/Player";
import { ChangeView } from "../../tools/Focus";
import BaseView from "../BaseView";
import BasePlayerMenuView from "./BasePlayerMenuView";
import PlayerMainView from "./PlayerMainView";

export default class PlayerInfoView extends BasePlayerMenuView {
 constructor(view: BaseView)    {
     super(view, "Informacje o postaci")
     
 this._options = [
      {
        name: `Poziom: ${Player.Instance!.Level}`,
action: () => {}
      },
 {
    name: `punkty doświadczenia: ${Player!.Instance?.Experience} / ${Player.Instance?.getNextLevel()}`,
    action: () => {}
 },
 {
name: `punkty zdrowia: ${Player!.Instance?.HP} / ${Player!.Instance?.MaxHP}`,
action: () => {}
 },
{
    name: `Atak: ${Player!.Instance?.Offensive}`, 
    action: () => {}
},
{
    name: `Obrona: ${Player!.Instance?.Defensive}`,
    action: () => {}
},
{
    name: `Punkty Umiejętności: ${Player.Instance!.SkillPoints}`, 
    action: () => {}
},
 {
    name: `Monety: ${Player!.Instance?.Money}`,
    action: () => {}
 }
 ]    

 
 }


}