import Output from "../tools/Output";


export default class BaseView {
    protected _nameView: string = ""
    protected say(text: string) {
        Output.Send(text, false)
    }

protected send(text: string) {
    Output.Send(text)
}

 Keyboard(key: KeyboardEvent)    {
    
 }
}