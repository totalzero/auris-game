import { BaseMenu } from "./BaseMenu"
import Speech from "../tools/speech"
import { ChangeView } from "../tools/Focus"
import Options from "./Options/Options"
import GameBoard from "./GameBoard"

import GameState from "../tools/GameState"

export default class MainMenu extends BaseMenu {
    constructor() {
        super()
        this.say("Menu Główne")
this._options= [
    {
        name : "Graj",
        action : () => {
            this.say("uruchamiam gre")
            
            ChangeView(new GameBoard())
            
        }
        },
        {
name: "Opcje",
action:      () => {
    ChangeView(new Options())
    
        }
    
        },
        {
            name: "Wyjście",
            action:      () => {
                window.close()
            }
        
        }
]
    }
}