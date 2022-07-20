import Player from "../../std/Player";
import BaseView from "../BaseView";
import BasePlayerMenuView from "./BasePlayerMenuView";

export default class PlayerQuestMenuView extends BasePlayerMenuView {
    private player: Player
 constructor(view: BaseView) {
     super(view)
     this.player = Player.Instance!
     this.constructMenu()
     this.say("lista zadań")
 }  

 private constructMenu() {
for (let quest of this.player.GetQuests()) {
    this._options.push([quest, () => {
        const desc = this.player.GetQuestDescription(quest)
        if (desc)
        this.say(desc)
    }])
}
 }
}