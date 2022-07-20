
import Mobile from "../obj/Mobile";
import Room from "../obj/Room";
import Player from "../std/Player";
import Speech from "./speech";

/**
 * class stores information and game object
 */

export default class GameState {
     private static _rooms: Map<Function, Room> = new Map<Function, Room>()
private static _hitCounter: Map<Mobile, number> = new Map<Mobile, number>()
 static questInfo: Map<string, string> = new Map<string, string>()

/**
 * function creates and stores Room object
 * @param fnc  class of the Room
 * @returns  instance of class from @param fnc
 */

    static getRoom(fnc: Function): Room {
        let room = GameState._rooms.get(fnc)
if (room) {
    return room
} else {
let rm = Reflect.construct(fnc, [])
GameState._rooms.set(fnc, rm)
return rm
}
    }

/**
 * start update game
 */

static startUpdate() {

for (let i of Player!.Instance!.Room!.Objects) {
    i.update()
}
//zastanowic sie nad przerobieniem jako samo update actual room - room wywoluje update wszystkich swoich obiektow.

}

static Killed(mob: Mobile) {
if (mob instanceof Player) {
    //game over
} else {
    Player.Instance!.Room?.removeObject(mob)
const expPoints = this.calculateExp(mob)
Player.Instance!.Experience += expPoints
this._hitCounter.delete(mob)
Speech.say(`otrzymujesz ${expPoints} punktów doświadczenia.`)
}
}

static Hit(mob: Mobile) {
    if (! this._hitCounter.get(mob)) {
        this._hitCounter.set(mob, 1)
    } else {
        this._hitCounter.set(mob, this._hitCounter.get(mob)! + 1)
    }
}

private static calculateExp(mob: Mobile): number {
    const hitCount = this._hitCounter.get(mob)
return mob.Level * hitCount!
}
}