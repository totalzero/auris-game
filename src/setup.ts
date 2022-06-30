import { testArea } from "./GameWorld/test"
import { Loc1 } from "./GameWorld/test/loc1"
import { Loc2 } from "./GameWorld/test/loc2"
import Player from "./std/Player"
import * as FOCUS from "./tools/Focus"
import GameState from "./tools/GameState"
import SoundManager from "./tools/SoundManager"
import Speech from "./tools/speech"
import MainMenu from "./views/MainMenu"


SoundManager.init()
const player = new Player()
player.Room = GameState.getRoom(Loc1)
player.Name = "gracz"
player.Offensive = 10
player.Defensive = 50

FOCUS.ChangeView(new MainMenu())
window.addEventListener('keydown', (event) => {
  Speech.stop()
  FOCUS.keyListener(event)  
})

