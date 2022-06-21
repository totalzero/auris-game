"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Speech {
    static stop() {
        Speech._synt.cancel();
    }
    static say(text) {
        Speech._utter.text = text;
        Speech._utter.rate = Speech._rate;
        Speech._utter.pitch = Speech._pitch;
        Speech._synt.speak(Speech._utter);
    }
    static get Rate() {
        return Speech._rate;
    }
    static set Rate(r) {
        Speech._rate = r;
    }
    get Pitch() {
        return Speech._pitch;
    }
    set Pitch(r) {
        Speech._pitch = r;
    }
}
exports.default = Speech;
Speech._synt = window.speechSynthesis;
Speech._utter = new SpeechSynthesisUtterance();
Speech._rate = 1;
Speech._pitch = 1;
