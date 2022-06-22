import { BaseMenu } from "./BaseMenu"
import Speech from "../tools/speech"
import { ChangeView } from "../tools/Focus"
import Options from "./Options/Options"
import GameBoard from "./GameBoard"
import GameLoop from "../GameLoop"
import GameState from "../tools/GameState"

export default class MainMenu extends BaseMenu {
    constructor() {
        super()
        this.say("Menu Główne")
this._options= [
    ["Graj", () => {
        this.say("uruchamiam gre")
        GameState.startLoop
        ChangeView(new GameBoard())
        
    }],
    ["Opcje", () => {
ChangeView(new Options())

    }],
    ["wyjście", () => {
        window.close()
    }]
]
    }
}