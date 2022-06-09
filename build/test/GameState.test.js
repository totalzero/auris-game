"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Room_1 = __importDefault(require("../src/obj/Room"));
const GameState_1 = __importDefault(require("../src/tools/GameState"));
test('when GameState.getRoom with class of this room return object of this class', () => {
    class testRoom extends Room_1.default {
        constructor() {
            super();
            this.Name = "this is test room";
        }
    }
    expect(GameState_1.default.getRoom(testRoom).Name).toBe("this is test room");
});
