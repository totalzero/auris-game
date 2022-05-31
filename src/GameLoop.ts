import Mobile from "./obj/Mobile"
import Player from "./std/Player"

export default class GameLoop {
    protected _mobileLoop: any = undefined
    protected _respawnLoop: any = undefined

 Start()    {
this._mobileLoop = setInterval(() => {
const npc = this.getNpcs()
for (let element of npc) {
    element.Update()
}
}, 1000/60)

this._respawnLoop = setInterval(() => {
Player.Instance?.Room?.Update()
}, 1000/60)
 }

 Stop() {
clearInterval(this._mobileLoop)
clearInterval(this._respawnLoop)
 }

 private getNpcs() {
     const obj = Player.Instance?.Room?.Objects
     const npc = []
 if (obj != undefined) {
     for (let element of obj) {
 if (element instanceof Mobile)
 npc.push(element)
     }
 }
 return npc
 }
 
}