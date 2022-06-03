import Room from "../../obj/Room";
import { Loc1 } from "./loc1";


function loc2(): Room {
const l = new Room()
l.Name = "to jest lokacja druga testowa"
l.Description = "druga testowa lokacja wiec sie nie spodziewaj niewiadomo czego"
l.Exits.south = Loc1
return l
}

export const Loc2 = loc2()