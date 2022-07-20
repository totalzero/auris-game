import Trader from "../../std/Trader";
import { Item1 } from "./item1";
import TestQuest from "./TestQuest";

export default class TestMerhant extends Trader {
    constructor() {
        super()
        this.Name = "handlarz"
        this.Description = "to jest przykładowy handlarz ekwipunkiem"
        this.Move = false
        this.addEquipment(Item1)
    }

    get Conversation(): string {
 if ((new TestQuest()).StartQuest()) {
     return "ojej, ciesze sie ze w koncu widze wojownika, no bo widzisz - tam w oddali lazi sobie to holerne monstrum, straszy mi klientow i psuje towar, zajmij sie nim prosze, a nagroda cie nie ominie"
 } 
 if ((new TestQuest().checkStatus() == "PROGRESS")) {
     (new TestQuest()).EndQuest()
     return "nareszcie monstrum nie bedzie mi psulo towaru, bardzo ci dziekuje"
 }
 return "nie mam ci nic do powiedzenia"
    }
}