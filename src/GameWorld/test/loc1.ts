import { testArea } from ".";
import { Floors } from "../../obj/Floors";
import Room from "../../obj/Room";
import GameState from "../../tools/GameState";

import { Item1 } from "./item1";
import { Loc2 } from "./loc2";
import Mob1 from "./mob1";
import { TestSwordHilt } from "./Sword";

export class Loc1 extends Room {
    
 constructor() {
     super()
 
this.Name = "lokacja testowa numer 1"
this.Description = "to jest po prostu lokacja testowa, wiec nie spodziewaj sie niczego niezwyklego"
this.Floors = [
    [Floors.grass, Floors.stone, Floors.none],
    [Floors.grass, Floors.stone, Floors.grass],
    [Floors.grass, Floors.stone, Floors.grass]
]
this.Exits.north = Loc2
this.AddObject(Item1)
this.AddObject(new Mob1(), new TestSwordHilt())
}
}

