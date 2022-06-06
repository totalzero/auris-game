import { testArea } from ".";
import { Floors } from "../../obj/Floors";
import Room from "../../obj/Room";
import { Item1 } from "./item1";
import { Loc2 } from "./loc2";

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

this.AddObject(Item1)
this.Exits.north = testArea.Locations.loc2
}
}

