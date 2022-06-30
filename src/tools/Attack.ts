import Mobile from "../obj/Mobile"
import { randomInteger } from "../random"
import Speech from "./speech"


export default function Attack(mob1: Mobile, mob2: Mobile) {
const damage = blow(mob1, mob2)
mob2!.HP -= damage
return damage
}

function blow(attacker: Mobile, opponent: Mobile): number  {
    let damage = 0
if (attacker.Offensive > opponent.Defensive) {
    const strengthOfAttack = attacker.Offensive - opponent.Defensive
    damage = randomInteger(1, strengthOfAttack)    
}
return damage
}