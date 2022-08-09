import GameObj from "../../obj/GameObj";
import Item from "../../obj/Item";
import Player from "../../std/Player";
import BaseView from "../BaseView";
import BaseContextMenu from "../ContextMenu/BaseContextMenu";
import PlayerEquipmentView from "./PlayerEquipmentView";

export default class PlayerEquipmentContextMenu extends BaseContextMenu {

    constructor(view: BaseView, obj: GameObj) {
        super(view, obj)
        
        this._options = [
            {
                name: "Urzyj",
                action: () => {
                    this._obj!.Use()
                }
            },
        {
            name: "Obejrzyj",
            action: () => {
                this.say(this._obj!.Description)
            }
        },
        {
            name: "Wyrzuć",
            action: () =>             () => {
                const x = Player!.Instance!.X
                const y = Player!.Instance!.Y
                this._obj!.X = x
                this._obj!.Y = y
                Player!.Instance!.removeEquipment(this._obj as Item)
                Player!.Instance!.Room?.AddObject(this._obj!)
                this.say(`wyrzucasz ${this._obj!.Name}`)
                this.backToPreviousView()
                }
                
        }
        ]
    }

}