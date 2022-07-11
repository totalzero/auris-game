import { Professions } from "../src/obj/Professions";
import Skill from "../src/obj/Skill";
import Trainer from "../src/std/Trainer";

function newSkill(level: number = 1): Skill {
class testSkill extends Skill {
    constructor() {
        super()
        this._level = level
    }
}
const nsk = new testSkill()

return nsk
}

function newTrainer(): Trainer {
    class TestTrainer extends Trainer {
constructor() {
    super()
    
    this._listSkill.DRUID = [newSkill(1), newSkill(2), newSkill(3), newSkill(4)]
}
    }
    return new TestTrainer()
}

test('training from unidentified profession return undefined', () => {
    expect(newTrainer().Training(Professions.Warrior, 1)).toBeUndefined()
})
test('when get training for defined profession return return not empty array', () => {
    expect(newTrainer().Training(Professions.Druid, 1)?.length).toBeGreaterThan(0)
})