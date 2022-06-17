import { ChangeView } from "../../tools/Focus";
import { BaseMenu } from "../BaseMenu";
import GameBoard from "../GameBoard";

export default class PlayerMainView extends BaseMenu {
private _board: GameBoard

constructor(view: GameBoard) {
    super()
    this._board = view

this._options = [
    ["Informacje", () => {
        this.playerInfo()
    }],
    ["Uzbrojenie", () => {
        this.armament()
    }],
    ["Ekwipunek", () => {
        this.equipment()
    }],
    ["Umiejętności", () => {
        this.skills()
    }]
]

    this.say("menu postaci")
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
    ChangeView(this._board)
}

private armament() {
    //menu uzbrojenia, czyli player.slots
}

private equipment() {
    //menu ekwipunku
}

private playerInfo() {
    //menu informacji o postaci - parametry, hp, exp, punkty skill i tak dalej
}

private skills() {
    //menu umiejetnosci - do przemyslenia
}

}