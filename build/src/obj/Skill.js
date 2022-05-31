"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Skill {
    constructor() {
        this._name = '';
        this._desc = '';
        this._action = () => { };
    }
    get Name() {
        return this._name;
    }
    get Description() {
        return this._desc;
    }
    Action() {
        this._action();
    }
}
exports.default = Skill;
