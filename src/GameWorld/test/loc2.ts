import { testArea } from ".";
import Room from "../../obj/Room";
import { Loc1 } from "./loc1";

export class Loc2 extends Room {
    constructor() {
        super()
        this.Name = "lokacja druga testowa"
        this.Description = "to jest druga testowa lokacja, wiec nie spodziewaj sie niczego "
        
    }
}