import Mobile from "./obj/Mobile";
import { randomInteger } from "./random";

export default function Attack(mob1: Mobile, mob2: Mobile) {
blow(mob1, mob2)

if (mob2.HP > 0)
blow(mob2, mob1)
}

function blow(attacker: Mobile, opponent: Mobile) {
if (attacker.Offensive > opponent.Defensive) {
    const strengthOfAttack = attacker.Offensive - opponent.Defensive
    opponent.HP -= randomInteger(1, strengthOfAttack)
}
}