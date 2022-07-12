import Trader from "../../std/Trader";
import { Item1 } from "./item1";

export default class TestMerhant extends Trader {
    constructor() {
        super()
        this.Name = "handlarz"
        this.Description = "to jest przykładowy handlarz ekwipunkiem"
        this.addEquipment(Item1)
    }
}