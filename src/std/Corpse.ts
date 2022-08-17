import Container from "../obj/Container";
import GameObj from "../obj/GameObj";
import Mobile from "../obj/Mobile";

export default class Corpse extends Container {
    constructor(obj?: Mobile) {
        super()
        if (obj) {
this.Name = "Ciało " + obj.Name
this.Add(obj.Equipment )
        }
    }

getInfo(): String {
    return `są to smętne zwłoki jakiejś istoty`
}

}