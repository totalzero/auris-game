"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Focus_1 = require("../../tools/Focus");
const speech_1 = __importDefault(require("../../tools/speech"));
const BaseView_1 = __importDefault(require("../BaseView"));
const OptionsSpeech_1 = __importDefault(require("./OptionsSpeech"));
class ChangeRate extends BaseView_1.default {
    constructor() {
        super();
        this._defaultRate = 1;
        this._percentRate = (speech_1.default.Rate * 100) / 10;
        this._helpInfo();
    }
    rateInfo() {
        this.say(`prędkość: ${speech_1.default.Rate}`);
    }
    _helpInfo() {
        this.say("strzałki lewo prawo zmieniają wartość, enter zapisuje i wraca do menu, escape anuluje.");
    }
    Keyboard(key) {
        switch (key.key) {
            case "ArrowRight":
                this._Faster();
                break;
            case "ArrowLeft":
                this._slower();
                break;
            case "Enter":
                this._accept();
                break;
            case "Escape":
                this._cancel();
                break;
            default:
                this._helpInfo();
                break;
        }
    }
    _Faster() {
        this._percentRate++;
        this.setRate(this._percentRate);
        this.rateInfo();
    }
    _slower() {
        this._percentRate--;
        this.setRate(this._percentRate);
        this.rateInfo();
    }
    _accept() {
        (0, Focus_1.ChangeView)(new OptionsSpeech_1.default());
    }
    _cancel() {
        speech_1.default.Rate = this._defaultRate;
        (0, Focus_1.ChangeView)(new OptionsSpeech_1.default());
    }
    setRate(rate) {
        speech_1.default.Rate = Math.round(10 * (rate / 100) * 10) / 10;
    }
}
exports.default = ChangeRate;
