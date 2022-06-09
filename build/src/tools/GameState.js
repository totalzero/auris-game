"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameState {
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
