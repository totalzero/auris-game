export default class Iterator {
    private _array: any[]
    private _step: number
private _currentElement: any = undefined

    constructor(arr: any[]) {
        this._array = arr
        this._step = 0
        
    }

get CurrentStep(): number {
    return this._step
}

HasNext(): boolean {
    if (this._step < this._array.length) {
        return true
    }
    return false
}

Next(): any {
if (this.HasNext()) {
    let element = this._array[this._step]
    this._step += 1
    this._currentElement = element
    return element
} else {
    throw new Error('the end of array')
}
}

Previous(): any {
    if (this._step <= 0){
        throw new Error('the end of array')
    }

    if (this._step >= this._array.length) {
        this._step = this._array.length 
    }
    this._step -= 1
    let element = this._array[this._step]
    this._currentElement = element
    return element
}

Reset() {
    this._step = 0
}

get CurrentElement(): any {
    return this._currentElement
}
}