import Helmet from "../src/std/Helmet";
import Player from "../src/std/Player";

function newHelmet(): Helmet {
    return new Helmet()
}

test('checking if helmet in player.slots.helmet', () => {
    const player = new Player()
  const helmet = newHelmet()  
  helmet.Use()
  expect(player.Slots.helmet).toBe(helmet)
})