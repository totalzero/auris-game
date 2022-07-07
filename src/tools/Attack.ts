import Mobile from "../obj/Mobile"
import { randomBoolean, randomInteger } from "../random"
import GameState from "./GameState"
import SoundManager from "./SoundManager"
import Speech from "./speech"


export default function Attack(attacker: Mobile, opponent: Mobile): boolean {
Speech.say(`${attacker.Name} atakuje ${opponent.Name}`)    
const distance = Distance(attacker, opponent)

const isDistance = distance <= attacker.CombatDistance
const isHit = randomBoolean()

const damage = function () {
const dm = attacker.Offensive - opponent.Defensive
if (dm > 0) {
    return dm
} else {
    return randomInteger(0, 1)
}
}()

if (isDistance) {
if (isHit) {
    const snd = SoundManager.Effect.Combat.Blow[opponent.SoundBlow] as HTMLAudioElement[]
    snd[randomInteger(0, 9)].play()
    GameState.Hit(opponent)
    Speech.say(`${opponent.Name} traci ${damage} z ${opponent.HP} punktów rzycia`)
 opponent.HP -= damage
 if (opponent.HP <= 0) {
     const snd = SoundManager.Effect.Combat.Dead[opponent.SoundDead] as HTMLAudioElement[]
     snd[randomInteger(0, 9)].play()
     Speech.say(`${opponent.Name} poległ`)
     Speech.say(`${attacker.Name} zabił ${opponent.Name}`)
     GameState.Killed(opponent)
 }
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
    