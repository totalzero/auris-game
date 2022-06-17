import Player from "../../std/Player";
import { ChangeView } from "../../tools/Focus";
import { BaseMenu } from "../BaseMenu";
import PlayerMainView from "./PlayerMainView";

export default class PlayerInfoView extends BaseMenu {

private _previousView: PlayerMainView

 constructor(view: PlayerMainView)    {
     super()
     this._previousView = view

 this._options = [
     [`Poziom: ${Player.Instance!.Level}`, () => {}],
[`punkty doświadczenia: ${Player!.Instance?.Experience}`, () => {}],
[`punkty zdrowia: ${Player!.Instance?.HP} / ${Player!.Instance?.MaxHP}`, () => {}],
[`Atak: ${Player!.Instance?.Offensive}`, () => {}],
[`Obrona: ${Player!.Instance?.Defensive}`, () => {}],
[`Monety: ${Player!.Instance?.Money}`, () => {}]
 ]    

 this.say("informacje o postaci")
 }

Keyboard(key: KeyboardEvent): void {
    switch (key.key) {
        case "Escape":
            this.backToPreviousView()
            break;
    
        default:
            super.Keyboard(key)
            break;
    }
}

private backToPreviousView() {
    ChangeView(this._previousView)
    this.say("powrót")
}

}