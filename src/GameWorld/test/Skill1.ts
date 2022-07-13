import Skill from "../../obj/Skill";
import Speech from "../../tools/speech";

class TestSkill extends Skill {
    constructor() {
        super()
 this._name = "Skill testowy"
 this._desc = "ten skil nie robi nic poza testem"
 this._level = 0
 this._action = () => {
     Speech.say("odwal sie stary")
 }

    }
}

let SkillTest = new TestSkill()
export default SkillTest