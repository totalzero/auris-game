import Item from "../obj/Item"
import Mobile from "../obj/Mobile"
import Room from "../obj/Room"

/**
 * this class store created Rooms, mobiles and items in game.
 * uses the map<> fields where the key is class name and value is object of this class
 */

export default class AreaManager {
 private static Manager?: AreaManager   
private _locations: Map<string, Room> = new Map<string, Room>()
private _items: Map<string, Item> = new Map<string, Item>()
private _mobs: Map<string, Mobile> = new Map<string, Mobile>()

 constructor() {
     AreaManager.Manager = this
 }

/**
 * singleton pattern
 */

static get Instance(): AreaManager | undefined {
    return AreaManager.Manager
}

 getLocation(locationName: string): Room | undefined {
const location = this._locations.get(locationName)
if (location != undefined) {
    return location
} else {
    console.error('room not found')
    return undefined
}
 }

 setLocation(location: Room) {
 this._locations.set(location.constructor.name, location)    
 }

 getItem(itemName: string): Item | undefined {
const item = this._items.get(itemName)
if (item) {
    return item
} else {
    console.error('item not found')
    return undefined
}
 }

 setItem(item: Item) {
     this._items.set(item.constructor.name, item)
 }

getMob(mobName: string): Mobile | undefined {
    const mob = this._mobs.get(mobName)
    if (mob) {
        return mob
    } else {
        console.error('mobile not found')
        return undefined
    }
}

setMob(mob: Mobile) {
    this._mobs.set(mob.constructor.name, mob)
}
}