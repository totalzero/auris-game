import { BaseMenu } from "./BaseMenu"
import Speech from "../tools/speech"
import { ChangeView } from "../tools/Focus"
import Options from "./Options/Options"

export default class MainMenu extends BaseMenu {
    constructor() {
        super()
        this.say("Menu Główne")
this._options= [
    ["Graj", () => {
        this.say("uruchamiam gre")
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