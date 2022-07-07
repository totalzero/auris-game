export default class SoundManager {

private static _instance: SoundManager
private effect: any  = {
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
"Combat" : {
    "Dead":  {
        "Player": [
            new Audio("sounds/combat/dead/player/1.ogg"),
            new Audio("sounds/combat/dead/player/2.ogg"),
            new Audio("sounds/combat/dead/player/3.ogg"),
            new Audio("sounds/combat/dead/player/4.ogg"),
            new Audio("sounds/combat/dead/player/5.ogg"),
            new Audio("sounds/combat/dead/player/6.ogg"),
            new Audio("sounds/combat/dead/player/7.ogg"),
            new Audio("sounds/combat/dead/player/8.ogg"),
            new Audio("sounds/combat/dead/player/9.ogg"),
            new Audio("sounds/combat/dead/player/10.ogg")
        ],
        "Other": [
new Audio("sounds/combat/dead/other/1.ogg"),
new Audio("sounds/combat/dead/other/2.ogg"),
new Audio("sounds/combat/dead/other/3.ogg"),
new Audio("sounds/combat/dead/other/4.ogg"),
new Audio("sounds/combat/dead/other/5.ogg"),
new Audio("sounds/combat/dead/other/6.ogg"),
new Audio("sounds/combat/dead/other/7.ogg"),
new Audio("sounds/combat/dead/other/8.ogg"),
new Audio("sounds/combat/dead/other/9.ogg"),
new Audio("sounds/combat/dead/other/10.ogg")
        ],
    },
    "Blow": {
        "Player": [
new Audio("sounds/combat/blows/player/1.ogg"),
new Audio("sounds/combat/blows/player/2.ogg"),
new Audio("sounds/combat/blows/player/3.ogg"),
new Audio("sounds/combat/blows/player/4.ogg"),
new Audio("sounds/combat/blows/player/5.ogg"),
new Audio("sounds/combat/blows/player/6.ogg"),
new Audio("sounds/combat/blows/player/7.ogg"),
new Audio("sounds/combat/blows/player/8.ogg"),
new Audio("sounds/combat/blows/player/9.ogg"),
new Audio("sounds/combat/blows/player/10.ogg"),
        ],
        "Other": [
new Audio("sounds/combat/blows/other/1.ogg"),
new Audio("sounds/combat/blows/other/2.ogg"),
new Audio("sounds/combat/blows/other/3.ogg"),
new Audio("sounds/combat/blows/other/4.ogg"),
new Audio("sounds/combat/blows/other/5.ogg"),
new Audio("sounds/combat/blows/other/6.ogg"),
new Audio("sounds/combat/blows/other/7.ogg"),
new Audio("sounds/combat/blows/other/8.ogg"),
new Audio("sounds/combat/blows/other/9.ogg"),
new Audio("sounds/combat/blows/other/10.ogg"),
        ],
    },
},
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

