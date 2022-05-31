"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Focus_1 = require("../../tools/Focus");
const BaseMenu_1 = require("../BaseMenu");
const MainMenu_1 = __importDefault(require("../MainMenu"));
const OptionsSpeech_1 = __importDefault(require("./OptionsSpeech"));
class Options extends BaseMenu_1.BaseMenu {
    constructor() {
        super();
        this.say("opcje gry");
        this._options = [
            ["mowa", () => {
                    (0, Focus_1.ChangeView)(new OptionsSpeech_1.default());
                }],
            ["powrót", () => {
                    (0, Focus_1.ChangeView)(new MainMenu_1.default());
                    this.say("Menu Główne");
                }]
        ];
    }
}
exports.default = Options;
