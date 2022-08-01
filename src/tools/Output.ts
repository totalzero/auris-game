import Speech from "./speech"

export default class Output {

    private static log: string[] = []
protected static outFunction: Function = (tx: string) => {}

static SetOutput(out: Function) {
    Output.outFunction = out
}

 static Send(text: string, log: boolean = true) {
if (log) {
    Output.log.push(text)
}
return Output.outFunction(text)
 }

static get Log(): string[] {
    return Output.Log
}

}

