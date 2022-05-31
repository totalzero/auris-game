import Player from "../src/std/Player"
import Shoes from "../src/std/Shoes"

test('checking if Shoes object to be in player.slots.shoes', () => {
    const shoes = new Shoes()
    const player = new Player()
    shoes.Use()
    expect(player.Slots.shoes).toBe(shoes)
})