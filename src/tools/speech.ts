export default class Speech {
 private static _synt: SpeechSynthesis = window.speechSynthesis
 private static _utter: SpeechSynthesisUtterance = new SpeechSynthesisUtterance()
 private static _rate: number = 1
 private static _pitch: number= 1
 


static say(text: string) {
    Speech._utter.text = text
    Speech._utter.rate = Speech._rate
    Speech._utter.pitch = Speech._pitch

Speech._synt.speak(Speech._utter)
}
static get Rate(): number {
    return Speech._rate
}

static set Rate(r: number) {
    Speech._rate = r
}

get Pitch(): number {
    return Speech._pitch
}

set Pitch(r: number) {
    Speech._pitch = r
}
}

