import Attack from "../src/Attack";
import Mobile from "../src/obj/Mobile";

function newMobile(): Mobile {
    return new Mobile()
}

test('testing attack with mob1 offensive  100 and mob2 defensive 50', () => {
    const mob1 = newMobile()
    const mob2 = newMobile()
  
    mob1.Offensive = mob1.Defensive = 100
    mob2.Defensive =mob2.Offensive = 50
    

  Attack(mob1, mob2)  
  expect(mob1.HP).toBe(100)
  expect(mob2.HP).toBeLessThan(100)

})

