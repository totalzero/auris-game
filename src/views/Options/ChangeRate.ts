import { ChangeView } from "../../tools/Focus";
import Speech from "../../tools/speech";
import BaseView from "../BaseView";

import OptionsSpeech from "./OptionsSpeech";

export default class ChangeRate extends BaseView {
    private _percentRate: number
    private _defaultRate:number = 1
 constructor()    {
     super()
     this._percentRate = (Speech.Rate * 100) / 10
this._helpInfo()
 }

private rateInfo() {
    this.say(`prędkość: ${Speech.Rate}`)
}

 private _helpInfo() {
     this.say("strzałki lewo prawo zmieniają wartość, enter zapisuje i wraca do menu, escape anuluje.")
 }

 Keyboard(key: KeyboardEvent): void {
     switch (key.key) {
         case "ArrowRight":
             this._Faster()
             break;

             case "ArrowLeft":
this._slower()
             break;

             case "Enter":
this._accept()
             break;

     case "Escape":
this._cancel()
     break;

         default:
             this._helpInfo()
             break;
     }
 }

 private _Faster() {
this._percentRate ++
this.setRate(this._percentRate)
this.rateInfo()
 }

 private _slower() {
    this._percentRate --
    this.setRate(this._percentRate)
    this.rateInfo()
 }

 private _accept() {
    ChangeView(new OptionsSpeech())
 }

 private _cancel() {
Speech.Rate = this._defaultRate
ChangeView(new OptionsSpeech())
 }

 private setRate(rate: number) {
     Speech.Rate = Math.round( 10 * (rate / 100) * 10) / 10
 }
}