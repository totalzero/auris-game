import { Professions } from "../obj/Professions";
import Skill from "../obj/Skill";
import Npc from "./Npc";

export default class Trainer extends Npc {
protected _listSkill: ListSkill  = {}

Training(profession: Professions, level: number): Skill[] | undefined {
    const skilList = this._listSkill[profession]
    let skills: Skill[] = []
    if (skilList != undefined) {
    for(let element of skilList) {
if (element.Level <= level)
skills.push(element)
    }
} else {
return undefined
}
return skills
}

}

interface ListSkill {
 "WARRIOR"?: Skill[],
 "DRUID"?: Skill[],
 "WIZARD"?: Skill[],
 "NONE"?: Skill[]   
}