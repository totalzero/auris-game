import Trainer from "../../std/Trainer"
import SkillTest from "./Skill1"

export default class TestTrainer extends Trainer {
constructor() {
    super()
    this.Name = "trener"
    this.Description = "to jest przykładowy trener"
    this._listSkill.NONE = [SkillTest]
}
}