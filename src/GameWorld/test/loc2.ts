
import Room from "../../obj/Room";
import GameState from "../../tools/GameState";
import { Loc1 } from "./loc1";
import TestMerhant from "./Merhant";
import TestTrainer from "./Trainer1";



export class Loc2 extends Room {
    constructor() {
        super()
        this.Name = "lokacja druga testowa"
        this.Description = "to jest druga testowa lokacja, wiec nie spodziewaj sie niczego "
        this.Exits.south = Loc1
        this.AddObject(new TestMerhant(), new TestTrainer())
    }
}

