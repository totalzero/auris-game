import { ChangeView } from "../../tools/Focus";
import BaseView from "../BaseView";
import GameBoard from "../GameBoard";
import BasePlayerMenuView from "./BasePlayerMenuView";
import PlayerArmamentView from "./PlayerArmamentView";
import PlayerEquipmentView from "./PlayerEquipmentView";
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
ChangeView(new PlayerArmamentView(this))
}

private equipment() {
    ChangeView(new PlayerEquipmentView(this))
}

private playerInfo() {
    ChangeView(new PlayerInfoView(this))
}

private skills() {
    //menu umiejetnosci - do przemyslenia
}

}