export default class SoundManager {

private static _instance: SoundManager
private effect = {
    "Menu": {
        MoveFocus: new Audio("sounds/menu/select-option.mp3"),
        EnterOption: new Audio("sounds/menu/enter-option.mp3"),
        CloseMenu: new Audio("sounds/menu/close-menu.mp3"),
        Nothing: new Audio("sounds/menu/nothing.mp3"),
    },
    "Floors": {
"GRASS": new Audio("sounds/floors/grass.ogg"),
"STONE": new Audio("sounds/floors/stone.ogg"),
"WATER": new Audio("sounds/floors/water.ogg"),
"NONE": new Audio("sounds/floors/none.ogg")
    },
    "Steps": [
new Audio("sounds/steps/1.ogg"),
 new Audio("sounds/steps/2.ogg"),
 new Audio("sounds/steps/3.ogg"), new Audio("sounds/steps/4.ogg"),
 new Audio("sounds/steps/5.ogg"),
 new Audio("sounds/steps/6.ogg"),
 new Audio("sounds/steps/7.ogg"),
 new Audio("sounds/steps/8.ogg"),
 new Audio("sounds/steps/9.ogg"),
 new Audio("sounds/steps/10.ogg")
],

}

    private constructor() {
        SoundManager._instance = this
    }

static init() {
    new SoundManager()
}

static get Effect() {
return SoundManager._instance.effect
}

}

class soundEffect extends Audio {
constructor(src: string) {
    super(src)
}   
}