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
{
    name: "Szybkość mowy",
    action:           () => {
        ChangeView(new ChangeRate())
                 }
        },         
        {
            name: "Wróć do menu",
            action:     () => {
                ChangeView(new MainMenu())
                         }                     
}
     ]
 }
}