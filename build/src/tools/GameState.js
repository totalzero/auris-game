"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * class stores information and game object
 */
class GameState {
    /**
     * function creates and stores Room object
     * @param fnc  class of the Room
     * @returns  instance of class from @param fnc
     */
    static getRoom(fnc) {
        let room = GameState._rooms.get(fnc);
        if (room) {
            return room;
        }
        else {
            let rm = Reflect.construct(fnc, []);
            GameState._rooms.set(fnc, rm);
            return rm;
        }
    }
}
exports.default = GameState;
GameState._rooms = new Map();
