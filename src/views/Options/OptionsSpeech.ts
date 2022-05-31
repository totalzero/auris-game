import { BaseMenu } from "../BaseMenu";
import Speech from "../../tools/speech";
import { ChangeView } from "../../tools/Focus";
import MainMenu from "../MainMenu";
import ChangeRate from "./ChangeRate";

export default class OptionsSpeech extends BaseMenu {
    
 constructor ()    {
     super()
this.say("opcje mowy")    
     this._options = [         
         ["szybkość mowy", () => {
ChangeView(new ChangeRate())
         }],
         ["Wróć do menu", () => {
ChangeView(new MainMenu())
         }]
     ]
 }
}