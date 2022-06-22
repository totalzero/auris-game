import GameObj from "../../obj/GameObj";
import Item from "../../obj/Item";
import Player from "../../std/Player";
import BaseView from "../BaseView";
import BaseContextMenu from "../ContextMenu/BaseContextMenu";
import PlayerEquipmentView from "./PlayerEquipmentView";

export default class PlayerEquipmentContextMenu extends BaseContextMenu {

private _updateEq: Function

    constructor(view: BaseView, obj: GameObj, updateEQ: Function) {
        super(view, obj)
        this._updateEq = updateEQ
        this._options = [
            ["urzyj", () => {
this._obj.Use()
            }],
            ["Obejrzyj", () => {
this.say(this._obj.getInfo() as string)
            }],
            ["Wyrzóć", () => {
const x = Player!.Instance!.X
const y = Player!.Instance!.Y
this._obj.X = x
this._obj.Y = y
Player!.Instance!.removeEquipment(this._obj as Item)
Player!.Instance!.Room?.AddObject(this._obj)
this.say(`wyrzucasz ${this._obj.Name}`)
this.backToPreviousView()

            }]
        ]
    }

    protected backToPreviousView(): void {
        this._updateEq()
        super.backToPreviousView()
    }
}