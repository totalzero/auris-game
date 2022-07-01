import Mobile from "../obj/Mobile";
import Room from "../obj/Room";
import Skill from "../obj/Skill";
import Armor from "./Armor";
import Helmet from "./Helmet";
import Shoes from "./Shoes";
import Weapon from "./Weapon";

export default class Player extends Mobile {
    static Instance?: Player
 protected _exp: number = 0
 protected _skillPoints: number = 100
 protected _maxSkillPoints: number = 100   
 protected _maxHP:number = 100
protected _money: number = 0
protected _actionPoints: number = 3
protected _maxActionPoints: number = 3
protected _slots: Slots = {}
protected _actuallRoom?: Room
protected _skills: Skill[] = []

constructor() {
    super()
    this.Respawn = false
    this._combatDistance = 0
    Player.Instance = this
}

get Slots(): Slots {
    return this._slots
}

set Slots(slot: Slots) {
    this._slots = slot
}

 get Experience(): number {
     return this._exp
 }

 set Experience(exp: number) {
     this._exp = exp
 }

 get SkillPoints(): number {
     return this._skillPoints
 }

 set SkillPoints(sp: number) {
     this._skillPoints = sp
 }

 get MaxSkillPoints(): number {
     return this._maxSkillPoints
 }

 set MaxSkillPoints(sp) {
     this._maxSkillPoints = sp
 }

 get MaxHP(): number {
     return this._maxHP
 }

 set MaxHP(mhp: number) {
     this._maxHP = mhp
 }

get Money(): number {
    return this._money
}

set Money(money: number) {
    this._money = money
}

get Room(): Room | undefined {
    return this._actuallRoom
}

set Room(room: Room | undefined) {
    this._actuallRoom?.removeObject(this)
    this._actuallRoom = room
    this._actuallRoom?.AddObject(this)
}

get Skills(): Skill[] {
    return this._skills
}

get ActionPoints(): number {
    return this._actionPoints
}

set ActionPoints(points) {
    this._actionPoints = points
}

get maxActionPoints(): number {
    return this._maxActionPoints
}

set maxActionPoints(points) {
    this.maxActionPoints = points
}

get Offensive(): number {
    let off = this.Level * 10
off += this.Slots.armor?.Offensive || 0
off += this.Slots.helmet?.Offensive || 0
off += this.Slots.shoes?.Offensive || 0
off += this.Slots.weapon?.Offensive || 0
this._ofens = off
    return this._ofens
}

set Offensive(ofens: number) {
    this._ofens = ofens
}

get Defensive(): number {
    let def  = this.Level * 10
def += this.Slots.armor?.Defensive || 0
def += this.Slots.helmet?.Defensive || 0
def += this.Slots.shoes?.Defensive || 0
def += this.Slots.weapon?.Defensive || 0
this._defens += def
    return this._defens
}

set Defensive(def: number) {
     this._defens = def
}


update(): void {
this.ActionPoints += this.maxActionPoints
}
}

interface Slots {
    "weapon"?: Weapon,
"helmet"?: Helmet,
"armor"?: Armor,
"shoes"?: Shoes,
    
}

