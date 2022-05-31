import { testArea } from "."
import { Floors } from "../../obj/Floors"
import Room from "../../obj/Room"

export default function Loc1(): Room {
 const l = new Room()   
l.Description = "to jest zwykla lokacja testowa, nie spodziewaj sie niewiadomo co"
l.Name = "lokacja testowa"
l.Exits = {
    north: testArea.loc2
}

l.Floors = [
[Floors.grass, Floors.stone, Floors.grass],
[Floors.grass, Floors.stone, Floors.grass],
[Floors.grass, Floors.stone, Floors.grass]
]

 return l
}