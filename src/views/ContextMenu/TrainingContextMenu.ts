import GameObj from "../../obj/GameObj";
import Skill from "../../obj/Skill";
import Player from "../../std/Player";
import Trainer from "../../std/Trainer";
import BaseView from "../BaseView";
import BaseContextMenu from "./BaseContextMenu";

export default class TrainingContextMenu extends BaseContextMenu {
    private _player: Player;
 constructor(view: BaseView, obj: GameObj)    {
     super(view, obj)
     this._player = Player.Instance!
 const skills = (this._obj as Trainer).Training(this._player.Profession, this._player.Level)
 if (skills) {
     for (let skil of skills) {
if (! this.checkSkill(skil)) {
this._options.push([skil.Name, () => {
    if (this._player.SkillPoints > 0) {
        this._player.SkillPoints -= 1
        this._player.Skills.push(skil)
        this.say(`trenujesz: ${skil.Name}`)
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

 private checkSkill(skl: Skill): boolean {
     let result = false
     for (let element of this._player.Skills) {
if (skl.Name === element.Name) {
    result = true
}
     }
     return result;
 }
}