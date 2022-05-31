"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Iterator {
    constructor(arr) {
        this._currentElement = undefined;
        this._array = arr;
        this._step = 0;
    }
    get CurrentStep() {
        return this._step;
    }
    HasNext() {
        if (this._step < this._array.length) {
            return true;
        }
        return false;
    }
    Next() {
        if (this.HasNext()) {
            let element = this._array[this._step];
            this._step += 1;
            this._currentElement = element;
            return element;
        }
        else {
            throw new Error('the end of array');
        }
    }
    Previous() {
        if (this._step <= 0) {
            throw new Error('the end of array');
        }
        if (this._step >= this._array.length) {
            this._step = this._array.length;
        }
        this._step -= 1;
        let element = this._array[this._step];
        this._currentElement = element;
        return element;
    }
    Reset() {
        this._step = 0;
    }
    get CurrentElement() {
        return this._currentElement;
    }
}
exports.default = Iterator;
