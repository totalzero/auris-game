import { testArea } from "./GameWorld/test"
import { Loc1 } from "./GameWorld/test/loc1"
import { Loc2 } from "./GameWorld/test/loc2"
import Player from "./std/Player"
import * as FOCUS from "./tools/Focus"
import GameState from "./tools/GameState"
import Output from "./tools/Output"

import Speech from "./tools/speech"
import MainMenu from "./views/MainMenu"


Output.SetOutput(Speech.say)

const player = new Player()
player.Room = GameState.getRoom(Loc1)
player.Name = "gracz"
player.Offensive = 10
player.Defensive = 50
player.Experience = 9
FOCUS.ChangeView(new MainMenu())
window.addEventListener('keydown', (event) => {
  Speech.stop()
  FOCUS.keyListener(event)  
})

