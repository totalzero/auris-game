
import Room from "../obj/Room";
import Player from "../std/Player";
import Speech from "./speech";

/**
 * class stores information and game object
 */

export default class GameState {
     private static _rooms: Map<Function, Room> = new Map<Function, Room>()


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



}