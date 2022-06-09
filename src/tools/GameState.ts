import Room from "../obj/Room";

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
}