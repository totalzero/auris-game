import { ChangeView } from "../../tools/Focus";
import { BaseMenu } from "../BaseMenu";
import GameBoard from "../GameBoard";
import PlayerInfoView from "./PlayerInfoView";

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
    this.say("zamykam menu postaci")
}

private armament() {
    //menu uzbrojenia, czyli player.slots
}

private equipment() {
    //menu ekwipunku
}

private playerInfo() {
    ChangeView(new PlayerInfoView(this))
}

private skills() {
    //menu umiejetnosci - do przemyslenia
}

}