import Mobile from "../obj/Mobile";
import { Professions } from "../obj/Professions";
import Room from "../obj/Room";
import Skill from "../obj/Skill";
import * as SoundManager from "../tools/SoundManager"
import Speech from "../tools/speech";
import Armor from "./Armor";
import Helmet from "./Helmet";
import Shoes from "./Shoes";
import Weapon from "./Weapon";

export default class Player extends Mobile {
    static Instance?: Player
    protected _questList: Map<string, string> = new Map<string, string>()
    protected _profession: Professions = Professions.None
 protected _exp: number = 0
 protected _skillPoints: number = 100
 protected _maxSkillPoints: number = 100   
 protected _maxHP:number = 100
protected _money: number = 0
protected _actionPoints: number = 3
protected _maxActionPoints: number = 3
protected _manaPoints: number = 100
protected _maxManaPoints = 100
protected _slots: Slots = {}
protected _actuallRoom?: Room
protected _skills: Skill[] = []

constructor() {
    super()
    this._soundBlow = SoundManager.SoundPlayerBlow
    this._soundDead = SoundManager.SoundPlayerDead
    this.Respawn = false
    this._combatDistance = 0
    Player.Instance = this
}

GetQuests(): string[] {
    const keys = this._questList.keys()
    let questNames = [] 
    for(let element of keys) {
    questNames.push(element)
    }
    return questNames
    }

GetQuestDescription(name: string): string | undefined {
    return this._questList.get(name)
}

SetQuest(name: string, desc: string) {
    this._questList.set(name, desc)
}

get Profession(): Professions {
    return this._profession
}

set Profession(prof) {
    this._profession = prof
}

get ManaPoints(): number  {
    return this._manaPoints
}
set ManaPoints(mana) {
    this._manaPoints = mana
}

get MaxManaPoints(): number {
    return this._maxManaPoints
}

set MaxManaPoints(mana) {
    this._maxManaPoints = mana
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
     if (this.Experience >= this.getNextLevel()) {
this.nextLevel()
     }
 }

getNextLevel(): number {
    return (this.Level * this.Level) * 10
}

private nextLevel() {
const nl = Math.ceil(Math.sqrt(this.Experience / 10))

for (let i = 0; i < nl - this.Level; i++) {
    this.SkillPoints ++

}
this.Level = nl
Speech.say("awansujesz na następny poziom")
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

