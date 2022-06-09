import Room from "../src/obj/Room";
import GameState from "../src/tools/GameState";

test('when GameState.getRoom with class of this room return object of this class', () => {
    class testRoom extends Room {
        constructor() {
            super()
            this.Name = "this is test room"
        }
    }
    expect(GameState.getRoom(testRoom).Name).toBe("this is test room")
})