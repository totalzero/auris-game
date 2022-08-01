import GameObj from "./GameObj";

export interface  menuItem {
 name: string,
 action: Function,
 obj?: GameObj   
}