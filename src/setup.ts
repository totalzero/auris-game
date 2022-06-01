import { testArea } from "./GameWorld/test"
import Player from "./std/Player"
import * as FOCUS from "./tools/Focus"
import MainMenu from "./views/MainMenu"

const player = new Player()
player.Room = testArea.Locations.Loc1

FOCUS.ChangeView(new MainMenu())
window.addEventListener('keydown', (event) => {
  FOCUS.keyListener(event)  
})