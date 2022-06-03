import { Floors } from "../../obj/Floors";
import Room from "../../obj/Room";
import { Item1 } from "./item1";
import { Loc2 } from "./loc2";

function loc1(): Room {
 const l = new Room()
l.Name = "lokacja testowa numer 1"
l.Description = "to jest po prostu lokacja testowa, wiec nie spodziewaj sie niczego niezwyklego"
l.Floors = [
    [Floors.grass, Floors.stone, Floors.none],
    [Floors.grass, Floors.stone, Floors.grass],
    [Floors.grass, Floors.stone, Floors.grass]
]

l.AddObject(Item1)
l.Exits.north = Loc2
 return l
}

export const Loc1 = loc1()