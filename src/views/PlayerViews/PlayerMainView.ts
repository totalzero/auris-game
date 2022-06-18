import { ChangeView } from "../../tools/Focus";
import BaseView from "../BaseView";
import GameBoard from "../GameBoard";
import BasePlayerMenuView from "./BasePlayerMenuView";
import PlayerInfoView from "./PlayerInfoView";

export default class PlayerMainView extends BasePlayerMenuView {
constructor(view: BaseView) {
    super(view)
this._menuClose = "zamykam menu"

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