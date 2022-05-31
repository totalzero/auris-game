export default abstract class Skill {
 protected _name: string = ''   
 protected _desc: string = ''
 protected _action: Function = () => {}

 get Name(): string {
     return this._name
 }

 get Description(): string {
     return this._desc
 }

 Action() {
     this._action()
 }
}