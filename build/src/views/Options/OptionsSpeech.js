"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseMenu_1 = require("../BaseMenu");
const Focus_1 = require("../../tools/Focus");
const MainMenu_1 = __importDefault(require("../MainMenu"));
const ChangeRate_1 = __importDefault(require("./ChangeRate"));
class OptionsSpeech extends BaseMenu_1.BaseMenu {
    constructor() {
        super();
        this.say("opcje mowy");
        this._options = [
            ["szybkość mowy", () => {
                    (0, Focus_1.ChangeView)(new ChangeRate_1.default());
                }],
            ["Wróć do menu", () => {
                    (0, Focus_1.ChangeView)(new MainMenu_1.default());
                }]
        ];
    }
}
exports.default = OptionsSpeech;
