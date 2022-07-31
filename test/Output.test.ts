import Output from "../src/tools/Output";

function returnString(text: string): string {
    return text
}

class testOutput extends Output {
constructor() {
    super()
    Output.outFunction = returnString
}
}

new testOutput()

test('checking if the output.send run function returnString', () => {
    const text = "sample text"
    expect(Output.Send(text)).toBe(text)
})

test('checking if the text should be in log', () => {
    const text = "jakis tekst"
    Output.Send(text)
    expect(Output.Log.includes(text)).toBe(true)
})