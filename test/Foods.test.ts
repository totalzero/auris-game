import Foods from "../src/std/Foods";
import Player from "../src/std/Player";

function newFood(): Foods {
    class Poison extends Foods {
        constructor() {
            super()
            this._mod = -5
        }
    }
    return new Poison()
}

test('using food will changed the player hp', () => {
  const poison = newFood()  
  const player = new Player()
  poison.Use()
  expect(player.HP).toBeLessThan(player.MaxHP)
})