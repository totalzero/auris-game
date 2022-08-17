import GameObj from "./GameObj";
import Item from "./Item";

export default class Container extends GameObj {
 protected _contents: Item[] = []

 get Contents(): Item[] {
    return this._contents
 }

Add(obj: Item[]) {
    for (let i of obj) {
        this._contents.push(i)
    }
}

}