"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseMenu_1 = require("./BaseMenu");
const Focus_1 = require("../tools/Focus");
const Options_1 = __importDefault(require("./Options/Options"));
const GameBoard_1 = __importDefault(require("./GameBoard"));
class MainMenu extends BaseMenu_1.BaseMenu {
    constructor() {
        super();
        this.say("Menu Główne");
        this._options = [
            ["Graj", () => {
                    this.say("uruchamiam gre");
                    (0, Focus_1.ChangeView)(new GameBoard_1.default());
                }],
            ["Opcje", () => {
                    (0, Focus_1.ChangeView)(new Options_1.default());
                }],
            ["wyjście", () => {
                    window.close();
                }]
        ];
    }
}
exports.default = MainMenu;
