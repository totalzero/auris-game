import Armor from "../src/std/Armor"
import Player from "../src/std/Player"

test('checking if object armor be in player.slots.armor', () => {
    const armor = new Armor()
  const player = new Player()  
  armor.Use()
  expect(player.Slots.armor).toBe(armor)
})