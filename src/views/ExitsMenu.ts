import Player from "../std/Player";
import { ChangeView } from "../tools/Focus";
import GameState from "../tools/GameState";
import { BaseMenu, menuItem } from "./BaseMenu";
import GameBoard from "./GameBoard";

export default class ExitsMenu extends BaseMenu {

private _previousView: GameBoard

    constructor(view: GameBoard) {
        super()
        this._previousView = view
 const rm = Player.Instance!.Room       
 if (rm?.Exits.north) {
     const ex = rm.Exits.north
     this._options.push(["Północ", () => {
Player.Instance!.Room = GameState.getRoom(ex)
     }])
    }

     if (rm?.Exits.south) {
         const ex = rm.Exits.south
         this._options.push(["Południe", () => {
Player.Instance!.Room = GameState.getRoom(ex)
         }])
        }

         if (rm?.Exits.east) {
             const ex = rm.Exits?.east
             this._options.push(["Wschód", () => {
                 Player.Instance!.Room = GameState.getRoom(ex)
             }])
            }  

            if (rm?.Exits.west) {
                const ex = rm.Exits.west
                this._options.push(["Zachód", () => {
                    Player.Instance!.Room = GameState.getRoom(ex)
                }])
            }

            this.say("menu przejść")
        }

Keyboard(key: KeyboardEvent): void {
    switch (key.key) {
        case "Escape":
            this.BackToPreviousView()
            break;
    
        default:
            super.Keyboard(key)
            break;
    }
}

protected _run(): void {
    super._run()
    this.newGameBoard()
}

    private BackToPreviousView() {
        ChangeView(this._previousView)
        this.say("zamykam menu")
    }

    private newGameBoard() {
        ChangeView(new GameBoard())
        this.say("przechodze do nowej lokacji")
    }
}