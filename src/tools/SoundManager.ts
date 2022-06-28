export default class SoundManager {

private static _instance: SoundManager
private effect = {
    "Menu": {
        MoveFocus: new Audio("sounds/menu/select-option.mp3"),
        EnterOption: new Audio("sounds/menu/enter-option.mp3"),
        CloseMenu: new Audio("sounds/menu/close-menu.mp3")
    },
    "Floors": {

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