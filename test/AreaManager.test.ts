import Item from "../src/obj/Item";
import Mobile from "../src/obj/Mobile";
import Room from "../src/obj/Room";
import AreaManager from "../src/tools/AreaManager";

new AreaManager()

class testLocation extends Room {
    constructor() {
        super()
        this.Name = "lokacja testowa"
    }
}

class testItem extends Item {
    constructor() {
        super()
        this.Name = "item testowy"
        AreaManager.Instance?.setItem(this)
    }
}

class testMob extends Mobile {
constructor() {
    super()
    this.Name = "npc testowy"
    AreaManager.Instance?.setMob(this)
}
}

test('when AreaManager.get name of class then return this class object', () => {
  const manager = new AreaManager()
      manager.setLocation(new testLocation())
  const testloc = new testLocation()
  expect(manager.getLocation(testLocation.name)?.Name).toBe(testloc.Name)
})


test('when AreaManager.getItem with name of item class return object of this class', () => {
  const item = new testItem()  
  expect(AreaManager.Instance?.getItem(testItem.name)?.Name).toBe(item.Name)
})

test('when AreaManager.getMob with mob class then return this class object', () => {
    const mob = new testMob()
    expect(AreaManager.Instance?.getMob(testMob.name)?.Name).toBe(mob.Name)
})