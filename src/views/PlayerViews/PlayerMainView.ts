import { ChangeView } from "../../tools/Focus";
import BaseView from "../BaseView";
import GameBoard from "../GameBoard";
import BasePlayerMenuView from "./BasePlayerMenuView";
import PlayerArmamentView from "./PlayerArmamentView";
import PlayerEquipmentView from "./PlayerEquipmentView";
import PlayerInfoView from "./PlayerInfoView";
import PlayerQuestMenuView from "./PlayerQuestMenuView";
import PlayerSkillsView from "./PlayerSkillsView";

export default class PlayerMainView extends BasePlayerMenuView {
constructor(view: BaseView) {
    super(view, "Menu Postaci")
this._messageCloseMenu = "Zamykam menu"
this._options = [
    {
name: "Informacje",
action:  () => {
    this.playerInfo()
}
},
{
    name: "Uzbrojenie",
    action:      () => {
        this.armament()
    }
    },
    {
        name: "Ekwipunek",
        action: () => {
            this.equipment()
        }        
},
{
    name: "Umiejętności",
    action: () => {
        this.skills()
    }
    },
    {
        name: "Zadania",
        action:     () => {
            this.Quest()
        }
    }
]
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
    ChangeView(new PlayerSkillsView(this))
}

private Quest() {
    ChangeView(new PlayerQuestMenuView(this))
}

}