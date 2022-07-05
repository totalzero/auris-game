import Mobile from "../obj/Mobile"
import { randomBoolean, randomInteger } from "../random"
import Speech from "./speech"


export default function Attack(attacker: Mobile, opponent: Mobile): boolean {
Speech.say(`${attacker.Name} atakuje ${opponent.Name}`)    
const distance = Distance(attacker, opponent)

const isDistance = distance <= attacker.CombatDistance
const isHit = randomBoolean()
const pOffens = attacker.Offensive
const damage = function () {
const dm = pOffens - opponent.Defensive
if (dm > 0) {
    return dm
} else {
    return randomInteger(0, 10)
}
}()

if (isDistance) {
if (isHit) {
Speech.say(`${opponent.Name} traci ${damage} z ${opponent.HP} punktów rzycia`)
 opponent.HP -= damage
 return true
} else {
    Speech.say(`${attacker.Name} nie trafia ${opponent.Name}`)
    return true
}
} else {
    return false
}

}


function Distance(mob1: Mobile, mob2: Mobile): number {
    const X = mob1.X - mob2.X
    const Y = mob1.Y - mob2.Y
    return Math.sqrt(X * X) + Math.sqrt(Y * Y)
    }
    