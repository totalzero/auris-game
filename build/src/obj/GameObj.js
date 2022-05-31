"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameObj {
    constructor() {
        this._name = "";
        this._desc = "";
        this._x = 0;
        this._y = 0;
        this._ofens = 0;
        this._defens = 0;
        this._level = 0;
        this._respawn = true;
        this._use = undefined;
        this._canPickup = false;
    }
    get Name() {
        return this._name;
    }
    set Name(name) {
        this._name = name;
    }
    get Description() {
        return this._desc;
    }
    set Description(desc) {
        this._desc = desc;
    }
    get X() {
        return this._x;
    }
    set X(x) {
        this._x = x;
    }
    get Y() {
        return this._y;
    }
    set Y(y) {
        this._y = y;
    }
    get Offensive() {
        return this._ofens;
    }
    set Offensive(ofens) {
        this._ofens = ofens;
    }
    get Defensive() {
        return this._defens;
    }
    set Defensive(def) {
        this._defens = def;
    }
    get Level() {
        return this._level;
    }
    set Level(level) {
        this._level = level;
    }
    get isRespawn() {
        return this._respawn;
    }
    set Respawn(res) {
        this._respawn = res;
    }
    getInfo() {
        return 'no information';
    }
    get Use() {
        return this._use;
    }
    get canPickup() {
        return this._canPickup;
    }
    set canPickup(pickup) {
        this._canPickup = pickup;
    }
}
exports.default = GameObj;
