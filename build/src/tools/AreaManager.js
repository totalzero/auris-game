"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * this class store created Rooms, mobiles and items in game.
 * uses the map<> fields where the key is class name and value is object of this class
 */
class AreaManager {
    constructor() {
        this._locations = new Map();
        this._items = new Map();
        this._mobs = new Map();
        AreaManager.Manager = this;
    }
    /**
     * singleton pattern
     */
    static get Instance() {
        return AreaManager.Manager;
    }
    getLocation(locationName) {
        const location = this._locations.get(locationName);
        if (location != undefined) {
            return location;
        }
        else {
            console.error('room not found');
            return undefined;
        }
    }
    setLocation(location) {
        this._locations.set(location.constructor.name, location);
    }
    getItem(itemName) {
        const item = this._items.get(itemName);
        if (item) {
            return item;
        }
        else {
            console.error('item not found');
            return undefined;
        }
    }
    setItem(item) {
        this._items.set(item.constructor.name, item);
    }
    getMob(mobName) {
        const mob = this._mobs.get(mobName);
        if (mob) {
            return mob;
        }
        else {
            console.error('mobile not found');
            return undefined;
        }
    }
    setMob(mob) {
        this._mobs.set(mob.constructor.name, mob);
    }
}
exports.default = AreaManager;
