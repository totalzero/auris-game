import Output from "../src/tools/Output";
import BaseView from "../src/views/BaseView";

function returnString(text: string): string {
    return text
}

Output.SetOutput(returnString)
const Key = {
    key: "ArrowUp"
}

class TestBaseView extends BaseView {
    constructor() {
        super()
        this._nameView = "TestView"
    }

Keyboard(key: KeyboardEvent): void {
    switch (key.key) {
        case "ArrowUp":
            this.send(this._nameView)
            break;
    
        default:
            break;
    }
}

}

const view = new TestBaseView()
view.Keyboard(Key as KeyboardEvent)

test("checking if the view name saved in Output.log", () => {
    expect(Output.Log.includes("TestView")).toBe(true)
})