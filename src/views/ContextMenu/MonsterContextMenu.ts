import GameObj from "../../obj/GameObj";
import Monster from "../../std/Monster";
import ControlPlayer from "../../tools/ControlPlayer";
import BaseView from "../BaseView";
import MobContextMenu from "./MobContextMenu";

export default class MonsterContextMenu extends MobContextMenu {
    constructor(view: BaseView, obj: GameObj) {
        super(view, obj)
this._options.push(["atakuj", () => {
    if (! new ControlPlayer().Combat(this._obj as Monster))  {
        this.say("jesteś za daleko.")
    }
    this.backToPreviousView()
}]
)
    }
}