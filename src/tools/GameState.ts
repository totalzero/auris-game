import Room from "../obj/Room";

export default class GameState {
     private static _rooms: Map<Function, Room> = new Map<Function, Room>()

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