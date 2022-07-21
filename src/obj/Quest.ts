import Player from "../std/Player"
import GameState from "../tools/GameState"

export default abstract class Quest {
private _name: string = ""

get Name(): string {
    return this._name
}

set Name(name) {
    this._name = name
}

protected AddQuestDescription(desc: string) {
    Player.Instance!.SetQuest(this.Name, desc)
}

StartQuest(): boolean {
    if (! this.checkStatus()) {
    this.saveQuestStatus(QuestStatus.Start)
return true
    }
    return false
}

ProgresQuest(): boolean {
    if (this.checkStatus() == "START") {
    this.saveQuestStatus(QuestStatus.Progress)
    return true
    } 
    return false
}

EndQuest(): boolean {
    if (this.checkStatus() == "PROGRESS") {
    this.saveQuestStatus(QuestStatus.End)
return true
    }
    return false
}

checkStatus(): string | undefined{
return GameState.questInfo.get(this.Name)
}

protected saveQuestStatus(status: QuestStatus) {
    GameState.questInfo.set(this.Name, status)
}

}

enum QuestStatus {
    Start = "START",
    End = "END",
    Progress = "PROGRESS"
}