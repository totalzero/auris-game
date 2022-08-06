import { ChangeView } from "../../tools/Focus";
import { BaseMenu } from "../BaseMenu";
import MainMenu from "../MainMenu";
import OptionsSpeech from "./OptionsSpeech";

export default class Options extends BaseMenu {
 constructor()    {
     super()
     this.say("opcje gry")
     this._options = [
        {
name: "Mowa",
action:           () => {
    ChangeView(new OptionsSpeech())
             }
        },
        {
            name: "Powrót",
            action:      () => {
                ChangeView(new MainMenu())
                this.say("Menu Główne")
            }
        }
     ]
 }
}