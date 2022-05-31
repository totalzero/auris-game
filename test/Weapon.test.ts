import Player from "../src/std/Player";
import Weapon from "../src/std/Weapon";

function newWeapon(): Weapon {
    return new Weapon()
}

test('checking if weapon.use set player.slots.weapon', () => {
    const player = new Player()
    const weapon = newWeapon()
  weapon.Use()  
  expect(player.Slots.weapon).toBe(weapon)
})