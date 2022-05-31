"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMenu = void 0;
const speech_1 = __importDefault(require("../tools/speech"));
const BaseView_1 = __importDefault(require("./BaseView"));
class BaseMenu extends BaseView_1.default {
    constructor() {
        super(...arguments);
        this._menuPos = -1;
        this._execute = undefined;
        this._options = [];
    }
    Keyboard(key) {
        switch (key.key) {
            case "ArrowDown":
                this._cursorDown();
                break;
            case "ArrowUp":
                this._cursorUp();
                break;
            case "Enter":
                this._run();
                break;
            default:
                break;
        }
    }
    _cursor(position) {
        this._execute = position[1];
        speech_1.default.say(position[0]);
    }
    _cursorDown() {
        if (this._menuPos < this._options.length - 1) {
            this._menuPos++;
            this._cursor(this._options[this._menuPos]);
        }
    }
    _cursorUp() {
        if (this._menuPos > 0) {
            this._menuPos--;
            this._cursor(this._options[this._menuPos]);
        }
    }
    _run() {
        if (this._execute != undefined)
            this._execute();
    }
}
exports.BaseMenu = BaseMenu;
