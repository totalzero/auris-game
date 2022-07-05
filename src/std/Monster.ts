import Mobile from "../obj/Mobile";
import Attack from "../tools/Attack";
import Player from "./Player";

export default class Monster extends Mobile {
 protected _aggresive: boolean = true
 
 get Aggresive(): boolean {
     return this._aggresive
 }

 set Aggresive(aggresive: boolean) {
     this._aggresive = aggresive
 }

update(): void {
    if (this.Aggresive) {
        this.Combat()
    } else {
super.update()
    }
    
}

protected Combat() {
    if (this.X === Player!.Instance!.X && this.Y === Player!.Instance!.Y) {
Attack(this, Player.Instance!)
    } else {
this.goPoint(Player!.Instance!.X, Player!.Instance!.Y)
if (this.X === Player!.Instance!.X && this.Y === Player!.Instance!.Y) 
    Attack(this, Player.Instance!)
    
    }
}

}