import GameObj from "./GameObj";

export interface  menuItem {
 name: string,
 action: Function,
 obj?: GameObj   
}

export interface Cursor {
    x: number,
    y: number
}