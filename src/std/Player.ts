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
protected _slots: Slots = {}
protected _actuallRoom?: Room
protected _skills: Skills = {}

constructor() {
    super()
    this.Respawn = false
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
    this._actuallRoom = room
}

get Skills(): Skills {
    return this._skills
}

Update(): void {
 if (this.SkillPoints < this.MaxSkillPoints)   
 this.SkillPoints += 1
}
}

interface Slots {
    "weapon"?: Weapon,
"helmet"?: Helmet,
"armor"?: Armor,
"shoes"?: Shoes,
    
}

interface Skills {
    "skill1"?: Skill,
    "skill2"?: Skill,
"skill3"?: Skill,
"skill4"? : Skill,
"skill5"? : Skill
}