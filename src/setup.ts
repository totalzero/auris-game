import { testArea } from "./GameWorld/test"
import { Loc1 } from "./GameWorld/test/loc1"
import { Loc2 } from "./GameWorld/test/loc2"
import Player from "./std/Player"
import * as FOCUS from "./tools/Focus"
import GameState from "./tools/GameState"
import MainMenu from "./views/MainMenu"


const player = new Player()
player.Room = GameState.getRoom(Loc1)


FOCUS.ChangeView(new MainMenu())
window.addEventListener('keydown', (event) => {
  FOCUS.keyListener(event)  
})

