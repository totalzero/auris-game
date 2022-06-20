import Skill from "../../obj/Skill";
import Player from "../../std/Player";
import BaseView from "../BaseView";
import BasePlayerMenuView from "./BasePlayerMenuView";

export default class PlayerSkillsView extends BasePlayerMenuView {
    constructor(view: BaseView) {
        super(view)
        this.constructSkillOptions()
        this.say("menu umiejętności")
    }

private constructSkillOptions() {
    const skills = Player!.Instance?.Skills
    if(skills) {
        for(let element of skills) {
            this.addSkillToMenu(element)
        }
    }
}

 private addSkillToMenu(skill: Skill)    {
this._options.push([`${skill.Name}`, () => {
    this.say(skill.Description)
}])
 }
}