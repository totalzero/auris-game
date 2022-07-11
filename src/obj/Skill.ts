import GameObj from "./GameObj"

export default abstract class Skill {
 protected _name: string = ''   
 protected _desc: string = ''
 protected _action: Function = (obj: GameObj) => {}

 get Name(): string {
     return this._name
 }

 get Description(): string {
     return this._desc
 }

 Action(obj: GameObj | null = null) {
     this._action(obj)
 }
}