import Mobile from "../obj/Mobile";

export default class Npc extends Mobile {
 protected _conversation: string = ""

get Conversation(): string {
    return this._conversation
}

}