import Player from "../std/Player";
import { ChangeView } from "../tools/Focus";
import GameState from "../tools/GameState";
import SoundManager from "../tools/SoundManager";
import { BaseMenu} from "./BaseMenu";
import BaseView from "./BaseView";
import GameBoard from "./GameBoard";

export default class ExitsMenu extends BaseMenu {



    constructor(view: BaseView) {
        super(view, "menu wyjść")
        
 const rm = Player.Instance!.Room       
 if (rm?.Exits.north) {
     const ex = rm.Exits.north
     this._options.push({
        name: "Północ",
        action: () => {
            Player.Instance!.Room = GameState.getRoom(ex)
        }
     })
    }

     if (rm?.Exits.south) {
         const ex = rm.Exits.south
        this._options.push({
            name: "Południe",
            action: () => {
                Player.Instance!.Room = GameState.getRoom(ex)
            }
        })}

         if (rm?.Exits.east) {
             const ex = rm.Exits?.east
            this._options.push({
                name: "Wschód",
                action: () => {
                    Player.Instance!.Room = GameState.getRoom(ex)
                }
            })}  

            if (rm?.Exits.west) {
                const ex = rm.Exits.west
            this._options.push({
                name: "Zachód",
                action: () => {
                    Player.Instance!.Room = GameState.getRoom(ex)
                }
            })}

            this.say("menu przejść")
        }

protected _run(): void {
    super.run()
    this.newGameBoard()
}


    private newGameBoard() {
        ChangeView(new GameBoard())
        this.say("przechodze do nowej lokacji")
    }
}