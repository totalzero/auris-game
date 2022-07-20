import Monster from "../../std/Monster";
import Speech from "../../tools/speech";
import TestQuest from "./TestQuest";

export default class Monstrum extends Monster {
    constructor() {
        super()
        this.Name = "Monstrum"
        this.Description = "to jest straszliwe monstrum ktore musisz zabic."
        this.HP = 1
        this.X = 2
        this.Y = 2

        this._events.Killed = () => {
            (new TestQuest).ProgresQuest()
            Speech.say("idz i odbierz nagrode")
        }
    }
}