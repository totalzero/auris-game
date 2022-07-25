import Player from "../../std/Player";
import { ChangeView } from "../../tools/Focus";
import BaseView from "../BaseView";
import BasePlayerMenuView from "./BasePlayerMenuView";
import PlayerMainView from "./PlayerMainView";

export default class PlayerInfoView extends BasePlayerMenuView {
 constructor(view: BaseView)    {
     super(view)
     
 this._options = [
     [`Poziom: ${Player.Instance!.Level}`, () => {}],
[`punkty doświadczenia: ${Player!.Instance?.Experience} / ${Player.Instance?.getNextLevel()}`, () => {}],
[`punkty zdrowia: ${Player!.Instance?.HP} / ${Player!.Instance?.MaxHP}`, () => {}],
[`Atak: ${Player!.Instance?.Offensive}`, () => {}],
[`Obrona: ${Player!.Instance?.Defensive}`, () => {}],
[`Punkty Umiejętności: ${Player.Instance!.SkillPoints}`, () => {}],
[`Monety: ${Player!.Instance?.Money}`, () => {}]
 ]    

 this.say("informacje o postaci")
 }


}