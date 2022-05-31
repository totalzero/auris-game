"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseMenu_1 = require("./BaseMenu");
const speech_1 = __importDefault(require("../tools/speech"));
const Focus_1 = require("../tools/Focus");
const MainMenu_1 = __importDefault(require("./MainMenu"));
class OptionsSpeech extends BaseMenu_1.BaseMenu {
    constructor() {
        super();
        this._defaultRate = speech_1.default.Rate;
        this._options = [
            [`prędkość: ${speech_1.default.Rate}`, (arg = 0) => {
                    if (arg != 0) {
                        speech_1.default.Rate += arg;
                        speech_1.default.say(`szybkość mowy: ${speech_1.default.Rate}`);
                    }
                    else {
                        speech_1.default.say("urzyj strzałek lewo i prawo, aby zmienić wartość");
                    }
                }],
            ["resetuj zmiany", () => {
                    speech_1.default.Rate = this._defaultRate;
                    speech_1.default.say("zmiany zresetowane");
                }],
            ["Zapisz i wróć do menu", () => {
                    (0, Focus_1.ChangeView)(new MainMenu_1.default());
                }]
        ];
    }
    Keyboard(key) {
        switch (key.key) {
            case "ArrowLeft":
                this._cursorLeft();
                break;
            case "ArrowRight":
                this._cursorRight();
                break;
            default:
                super.Keyboard(key);
                break;
        }
    }
    _cursorLeft() {
        try {
            const rt = speech_1.default.Rate;
            if (this._execute != undefined)
                this._execute(rt - 0.01);
        }
        catch (error) {
            //instruction
        }
    }
    _cursorRight() {
        try {
            const rt = speech_1.default.Rate;
            if (this._execute != undefined)
                this._execute(rt + 0.01);
        }
        catch (error) {
            //instruction
        }
    }
}
exports.default = OptionsSpeech;
