import Quest from "../../obj/Quest";

export default class TestQuest extends Quest {
 constructor()    {
     super()
     this.Name = "akt pierwszy quest testowy"
 }

StartQuest(): boolean {
    if (super.StartQuest()) {
    this.AddQuestDescription("to jest quest testowy, twoim zadaniem jest zabicie monstruma")
    return true
    }
    return false
}

ProgresQuest(): boolean {
    if (super.ProgresQuest()) {
        this.AddQuestDescription("zabiles juz monstruma, teraz wroc i odbierz nagrode")
        return true
    }
    return false
}

EndQuest(): boolean {
    if (super.EndQuest()) {
        this.AddQuestDescription("zabilem monstruma i odebralem nagrode, to juz jest koniec")
        return true
    }
    return false
}
}