export default abstract class GameObj {
 protected _name: string = ""
protected _desc: string = ""
protected _x: number = 0
protected _y: number = 0
protected _ofens: number = 0
protected _defens: number = 0
protected _level: number = 0
protected _respawn: boolean = true
protected _use: any = undefined
protected _canPickup: boolean = false


get Name(): string {
    return this._name
}

set Name(name: string) {
    this._name = name
}

get Description(): string {
    return this._desc
}

set Description(desc: string) {
    this._desc = desc
}

get X(): number {
    return this._x
}

set X(x: number) {
    this._x = x
}

get Y():number {
    return this._y
}

set Y(y:number) {
    this._y = y
}

get Offensive(): number {
    return this._ofens
}

set Offensive(ofens: number) {
    this._ofens = ofens
}

get Defensive(): number {
    return this._defens
}

set Defensive(def: number) {
    this._defens = def
}

get Level(): number {
    return this._level
}

set Level(level: number) {
    this._level = level
}

get isRespawn(): boolean {
    return this._respawn
}

set Respawn(res: boolean) {
    this._respawn = res
}

getInfo(): String {
    return 'no information'
}
get Use(): any {
    return this._use
}

get canPickup(): boolean {
    return this._canPickup
}

set canPickup(pickup: boolean) {
    this._canPickup = pickup
}
}

