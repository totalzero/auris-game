import GameObj from "../../obj/GameObj";
import Player from "../../std/Player";
import Trainer from "../../std/Trainer";
import BaseView from "../BaseView";
import BaseContextMenu from "./BaseContextMenu";

export default class TrainingContextMenu extends BaseContextMenu {
 constructor(view: BaseView, obj: GameObj)    {
     super(view, obj)
     const player = Player.Instance!
 const skills = (this._obj as Trainer).Training(player.Profession, player.Level)
 if (skills) {
     for (let skil of skills) {
if (! player.Skills.includes(skil)) {
this._options.push([skil.Name, () => {
    if (player.SkillPoints > 0) {
        player.SkillPoints -= 1
        player.Skills.push(skil)
        this.backToPreviousView()
    } else {
        this.say("nie masz punktów umiejętności wymaganych do treningu")
    }
}])
}
     }
 } else {
     this.say("nie wiem nic o umiejętnościach twojej profesji")
 }
 }
}