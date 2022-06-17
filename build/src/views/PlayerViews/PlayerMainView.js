"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Focus_1 = require("../../tools/Focus");
const BaseMenu_1 = require("../BaseMenu");
const PlayerInfoView_1 = __importDefault(require("./PlayerInfoView"));
class PlayerMainView extends BaseMenu_1.BaseMenu {
    constructor(view) {
        super();
        this._board = view;
        this._options = [
            ["Informacje", () => {
                    this.playerInfo();
                }],
            ["Uzbrojenie", () => {
                    this.armament();
                }],
            ["Ekwipunek", () => {
                    this.equipment();
                }],
            ["Umiejętności", () => {
                    this.skills();
                }]
        ];
        this.say("menu postaci");
    }
    Keyboard(key) {
        switch (key.key) {
            case "Escape":
                this.backToPreviousView();
                break;
            default:
                super.Keyboard(key);
                break;
        }
    }
    backToPreviousView() {
        (0, Focus_1.ChangeView)(this._board);
        this.say("zamykam menu postaci");
    }
    armament() {
        //menu uzbrojenia, czyli player.slots
    }
    equipment() {
        //menu ekwipunku
    }
    playerInfo() {
        (0, Focus_1.ChangeView)(new PlayerInfoView_1.default(this));
    }
    skills() {
        //menu umiejetnosci - do przemyslenia
    }
}
exports.default = PlayerMainView;
